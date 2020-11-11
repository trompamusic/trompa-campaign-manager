import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import CreateDigitalDocModal from '../../components/CreateDigitalDocModal/CreateDigitalDocModal';
import { createDigitalDoc } from '../../services/api.service';
import { formatUrl } from '../../utils';
import * as aws from '../../services/aws.service';

export default function CreateDigitalDoc({ musicCompositionId, onDigitalDocCreated }) {
  const { t }            = useTranslation('startCampaign');
  const fileInputRef     = useRef();
  const setFieldValueRef = useRef();

  const handleUploadButtonClick = setFieldValue => {
    setFieldValueRef.current = setFieldValue;
    fileInputRef.current.click();
  };

  useEffect(() => {
    aws.initializeUpload();

    fileInputRef.current          = document.createElement('input');
    fileInputRef.current.type     = 'file';
    fileInputRef.current.onchange = event => {
      const file = event.target.files[0];

      file
        ? aws.upload(file).then(url => setFieldValueRef.current("url", url))
        : alert(t('create_digital_doc.please_choose'));
    };
  }, [t]);

  const digitalDocumentInitialValues = {
    title       : '',
    creator     : '',
    language    : 'en',
    url         : '',
    license     : 'https://www0.cpdl.org/wiki/index.php/ChoralWiki:CPDL',
    thumbnailUrl: '',
    description : '',
  };

  const onFormSubmit = async ({ title, url, creator, thumbnailUrl, description, language, license }) => {
    url          = formatUrl(url);
    thumbnailUrl = formatUrl(thumbnailUrl);

    const digitalDocumentData = {
      name    : title,
      relation: url,
      source  : url,
      image   : thumbnailUrl,
      license,
      language,
      title,
      url,
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
    <CreateDigitalDocModal initialFormValues={digitalDocumentInitialValues} onFormSubmit={onFormSubmit} onUploadButtonClick={handleUploadButtonClick} />
  );
}
