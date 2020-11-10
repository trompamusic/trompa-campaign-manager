import React from 'react';
import CreateDigitalDocModal from '../../components/CreateDigitalDocModal/CreateDigitalDocModal';
import { createDigitalDoc } from '../../services/api.service';

export default function CreateDigitalDoc({ musicCompositionId, onDigitalDocCreated }) {
  const digitalDocumentInitialValues = {
    title       : '',
    creator     : '',
    language    : 'en',
    url         : '',
    license     : 'https://www0.cpdl.org/wiki/index.php/ChoralWiki:CPDL',
    thumbnailUrl: '',
    description : undefined,
  };

  console.log(musicCompositionId);

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
    <CreateDigitalDocModal initialFormValues={digitalDocumentInitialValues} onFormSubmit={onFormSubmit} />
  );
}

CreateDigitalDoc.propTypes = {};

CreateDigitalDoc.defaultProps = {};
