import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import * as PropTypes from 'prop-types';
import CreateDigitalDocModal from '../../components/CreateDigitalDocModal/CreateDigitalDocModal';
import styles from './CreateDigitalDoc.styles';

const temp ="affb36ad-1338-4906-bf9f-b526cd839be3";

const useStyles = makeStyles(styles);

export default function CreateDigitalDoc () {
  const classes                                                  = useStyles();
  // const [digitalDocumentMetadata, updateDigitalDocumentMetadata] = useState({});

  const digitalDocumentMetadata ={
    name        : "",
    title       : "",
    relation    : "https://FILE",
    creator     : "",
    language    : "en",
    url         : "https://FILE",
    source      : "https://FILE",
    license     : "https://LICENSE",
    image       : "https://IMAGE",
    thumbnailUrl: "https://IMAGE",
    description : "",
  };

  return (
    <div className={classes.root}>
      <CreateDigitalDocModal  initialFormValues={digitalDocumentMetadata} />
    </div>
  );
}

CreateDigitalDoc.propTypes = {};

CreateDigitalDoc.defaultProps = {};
