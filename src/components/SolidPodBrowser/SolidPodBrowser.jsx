import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import CloseIcon from '@material-ui/icons/Close';
import WarningIcon from '@material-ui/icons/Warning';
import { useTranslation } from 'react-i18next';
import * as PropTypes from 'prop-types';
import { Button, Dialog, DialogTitle, IconButton, Typography } from '@material-ui/core';
import { extensionFromFilename } from "../../utils";
import styles from './SolidPodBrowser.styles';

const useStyles = makeStyles(styles);

export default function SolidPodBrowser ({ open, solidPodBrowserUrl, allowedExtensions, onSolidPodFileSelected, onClose }) {
  const { t }                         = useTranslation('startCampaign');
  const classes                       = useStyles();
  const [fileUrl, setFileUrl]         = useState('');
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const iframeListener = ({ data: { selectedItem } }) => {
      if(!selectedItem) return;

      const { name, url, isFolder } = selectedItem;
      const extension               = extensionFromFilename(name);

      if(isFolder){
        setShowWarning(false);
        setFileUrl('');

        return;
      }
      
      if(!allowedExtensions.includes(extension)){
        setShowWarning(true);
        setFileUrl('');
      } else {
        setShowWarning(false);
        setFileUrl(url);
      }
    };

    window.addEventListener('message', iframeListener); 

    return () => window.removeEventListener('message', iframeListener);
  }, [allowedExtensions, t]);

  return (
    <Dialog open={open} onClose={onClose} className={classes.root} maxWidth="lg" fullWidth>
      <div className={classes.container}>
        <DialogTitle className={classes.title} disableTypography>
          <Typography variant="h2">
            {t('create_digital_doc.select_from_solid_pod')}
          </Typography>
          <IconButton className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <div className={classes.iframeContainer}>
          <iframe src={solidPodBrowserUrl} title={t('create_digital_doc.solid_pod_browser')} className={classes.iframe} />
          <div className={classes.bottomBar}>
            {showWarning && 
              <React.Fragment>
                <WarningIcon className={classes.warningIcon} />
                <Typography className={classes.warning}>
                  {t('create_digital_doc.supported_filetypes', { extensions: allowedExtensions.join(', ') } )}
                </Typography>
              </React.Fragment>
            }
            <Button 
              variant="contained"
              color="primary" 
              disabled={!fileUrl}
              onClick={() => onSolidPodFileSelected(fileUrl)}
            >
              {t('create_digital_doc.select')}
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

SolidPodBrowser.propTypes = {
  open                  : PropTypes.bool.isRequired,
  solidPodBrowserUrl    : PropTypes.string.isRequired,
  allowedExtensions     : PropTypes.array,
  onSolidPodFileSelected: PropTypes.func.isRequired,
  onClose               : PropTypes.func.isRequired,
};
