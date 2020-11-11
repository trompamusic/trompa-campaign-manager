import React, { useRef, useEffect } from 'react';
import CreateDigitalDocModal from '../../components/CreateDigitalDocModal/CreateDigitalDocModal';
import { createDigitalDoc } from '../../services/api.service';
import * as aws from '../../services/aws.service';

export default function CreateDigitalDoc({ musicCompositionId, onDigitalDocCreated }) {
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
        : alert("Please choose a file to upload first.");
    };
  }, []);

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
      description,
    };

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
