import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import * as PropTypes from 'prop-types';
import CreateDigitalDocModal from '../../components/CreateDigitalDocModal/CreateDigitalDocModal';
import styles from './CreateDigitalDoc.styles';

const temp ="affb36ad-1338-4906-bf9f-b526cd839be3";

const useStyles = makeStyles(styles);

export default function CreateDigitalDoc() {
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

  const onFormSubmit = ({ title, url, creator, thumbnailUrl, description, language, license }) => {
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

    console.log(data);
  };

  return (
    <div className={classes.root}>
      <CreateDigitalDocModal  initialFormValues={digitalDocumentInitialValues} onFormSubmit={onFormSubmit} />
    </div>
  );
}

CreateDigitalDoc.propTypes = {};

CreateDigitalDoc.defaultProps = {};
