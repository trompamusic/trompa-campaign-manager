import React from 'react';
import { makeStyles } from '@material-ui/styles';
import CreateDigitalDocModal from '../../components/CreateDigitalDocModal/CreateDigitalDocModal';
import { createDigitalDoc } from '../../services/api.service';
import styles from './CreateDigitalDoc.styles';

const useStyles = makeStyles(styles);

export default function CreateDigitalDoc({ musicCompositionId, onDigitalDocCreated }) {
  const classes                                                  = useStyles();

  const digitalDocumentInitialValues = {
    title       : "",
    creator     : "",
    language    : "",
    url         : "",
    license     : "",
    thumbnailUrl: "",
    description : "",
  };

  console.log(musicCompositionId);

  const onFormSubmit = async ({ title, url, creator, thumbnailUrl, description, language, license }) => {
    const data = {
      name    : title,
      relation: url,
      source  : url,    
      image   : thumbnailUrl,
      title       ,
      url,
      creator  ,
      language    ,
      license     ,
      thumbnailUrl,
      description ,
    };

    createDigitalDoc(musicCompositionId, data);
  };

  return (
    <CreateDigitalDocModal  initialFormValues={digitalDocumentInitialValues} onFormSubmit={onFormSubmit} />
  );
}

CreateDigitalDoc.propTypes = {};

CreateDigitalDoc.defaultProps = {};
