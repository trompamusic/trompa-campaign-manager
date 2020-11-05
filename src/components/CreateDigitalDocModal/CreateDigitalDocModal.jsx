import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography/Typography';
import Input from '../Input/Input';
import Form from '../Form/Form';
import styles from './CreateDigitalDocModal.styles';

const useStyles = makeStyles(styles);

export default function CreateDigitalDocModal () {
  const { t }           = useTranslation('startCampaign');
  const classes         = useStyles();
  const [open, setOpen] = React.useState(true);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = () => {};

  const initialFormValues = {};

  const licenses  = ['Public', ' ', ' '];
  const languages = ['English', ' ', ' '];

  return (
    <div className={classes.root}>
      <Dialog open={open} onClose={handleClose} maxWidth={'md'} fullWidth>
        <DialogTitle className={classes.title} disableTypography >
          <Typography className={classes.header} variant="h2">
            {t('create_digitial_doc.select_own_file')}
          </Typography>
          <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Form onSubmit={onSubmit} initialValues={{ ...initialFormValues }}>
            {({ values, handleChange, handleSubmit, handleBlur, setFieldValue, setFieldTouched, isSubmitting }) => (
              <div className={classes.container}>
                <Input
                  label={t('create_digitial_doc.score')}
                  value={values.campaignTitle}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Input
                  label={t('create_digitial_doc.thumbnail')}
                  value={values.campaignTitle}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Input
                  label={t('create_digitial_doc.score_title')}
                  value={values.campaignTitle}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Input
                  label={t('create_digitial_doc.editor')}
                  value={values.campaignTitle}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Input
                  label={t('create_digitial_doc.publisher')}
                  value={values.campaignTitle}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Input
                  label={t('create_digitial_doc.copyright')}
                  value={values.campaignTitle}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  select
                >
                  {licenses.map(option => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Input>
                <Input
                  label={t('create_digitial_doc.language')}
                  value={values.campaignTitle}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  select
                >
                  {languages.map(option => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Input>
                <Input
                  label={t('create_digitial_doc.notes')}
                  value={values.campaignTitle}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={3}
                  multiline
                />
              </div>
            )}
          </Form>
        </DialogContent>
        <DialogActions>
          <div className={classes.buttons}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              {t('create_digitial_doc.upload')}
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}

CreateDigitalDocModal.propTypes = {};

CreateDigitalDocModal.defaultProps = {};
