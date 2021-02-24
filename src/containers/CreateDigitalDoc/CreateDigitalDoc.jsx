import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CreateDigitalDocModal from '../../components/CreateDigitalDocModal/CreateDigitalDocModal';
import { createDigitalDoc } from '../../services/api.service';
import { formatUrl } from '../../utils';
import * as aws from '../../services/aws.service';
import SolidPodBrowser from '../../components/SolidPodBrowser/SolidPodBrowser';
import FileExtensions from '../../enum/FileExtensions';

const digitalDocumentInitialValues = {
  title       : '',
  creator     : '',
  language    : 'en',
  scoreUrl    : '',
  license     : 'https://www0.cpdl.org/wiki/index.php/ChoralWiki:CPDL',
  thumbnailUrl: '',
  description : '',
};

export default function CreateDigitalDoc({ musicCompositionId, onDigitalDocCreated }) {
  const { t }                                         = useTranslation('startCampaign');
  const solidPodBrowserUrl                            = process.env.REACT_APP_SOLID_POD_BROWSER_URL;
  const [solidPodBrowserOpen, setSolidPodBrowserOpen] = useState(false);
  const fileInputRef                                  = useRef();
  const setFieldValueRef                              = useRef();
  const inputNameRef                                  = useRef();

  const handleUploadButtonClick    = (inputName, setFieldValue) => {
    inputNameRef.current     = inputName;
    setFieldValueRef.current = setFieldValue;
    fileInputRef.current.click();
  };
  const handleSolidPodButtonClick  = (inputName, setFieldValue) => {
    inputNameRef.current     = inputName;
    setFieldValueRef.current = setFieldValue;
    setSolidPodBrowserOpen(true);
  };
  const handleSolidPodFileSelected = fileUrl => {
    setFieldValueRef.current(inputNameRef.current, fileUrl);
    setSolidPodBrowserOpen(false);
  };

  useEffect(() => {
    aws.initializeUpload();

    fileInputRef.current          = document.createElement('input');
    fileInputRef.current.type     = 'file';
    fileInputRef.current.onchange = event => {
      const file = event.target.files[0];

      if(file){
        aws.upload(file).then(url => setFieldValueRef.current(inputNameRef.current, url));
      }
    };
  }, [t]);

  const onFormSubmit = async ({ title, scoreUrl, creator, thumbnailUrl, description, language, license }) => {
    const formattedScoreUrl     = formatUrl(scoreUrl);
    const formattedThumbnailUrl = formatUrl(thumbnailUrl);

    const digitalDocumentData = {
      name    : title,
      url     : formattedScoreUrl,
      relation: formattedScoreUrl,
      source  : formattedScoreUrl,
      image   : formattedThumbnailUrl,
      license,
      language,
      title,
      creator,
      thumbnailUrl,
    };

    if(description) digitalDocumentData.description = description;

    try {
      const { ok, data: { data } } = await createDigitalDoc(musicCompositionId, digitalDocumentData);

      if (ok) {
        return onDigitalDocCreated({ identifier: data.identifier, ...digitalDocumentData });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <CreateDigitalDocModal 
        initialFormValues={digitalDocumentInitialValues} 
        onUploadButtonClick={handleUploadButtonClick} 
        onSolidPodButtonClick={handleSolidPodButtonClick}
        onFormSubmit={onFormSubmit} 
      />
      <SolidPodBrowser 
        open={solidPodBrowserOpen} 
        solidPodBrowserUrl={solidPodBrowserUrl}
        allowedExtensions={inputNameRef.current? FileExtensions[inputNameRef.current] : []}
        onSolidPodFileSelected={handleSolidPodFileSelected}
        onClose={() => setSolidPodBrowserOpen(false)}
      />
    </React.Fragment>
  );
}
