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

export default function CreateDigitalDocModal ({ initialFormValues, onFormSubmit }) {
  const { t }           = useTranslation('startCampaign');
  const classes         = useStyles();
  const [open, setOpen] = React.useState(true);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const licenses  = ['Public', ' ', undefined];
  const languages = ['en', ' ', undefined];

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
        <Form onSubmit={onFormSubmit} initialValues={{ ...initialFormValues }}>
          {({ values, handleChange, handleSubmit, handleBlur, setFieldValue, setFieldTouched, isSubmitting }) => (
            <div className={classes.container}>
              <DialogContent>
                <Input
                  label={t('create_digitial_doc.score')}
                  name="url"
                  value={values.url}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Input
                  label={t('create_digitial_doc.thumbnail')}
                  value={values.thumbnailUrl}
                  name="thumbnailUrl"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Input
                  label={t('create_digitial_doc.score_title')}
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Input
                  label={t('create_digitial_doc.editor')}
                  name="creator"
                  value={values.creator}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {/* <Input
                  label={t('create_digitial_doc.publisher')}
                  value={values.campaignTitle}
                  onChange={handleChange}
                  onBlur={handleBlur}
                /> */}
                <Input
                  label={t('create_digitial_doc.copyright')}
                  value={values.license}
                  name="license"
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
                  name="language"
                  value={values.language}
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
                  value={values.description}
                  name="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={3}
                  multiline
                />

              </DialogContent>
              <DialogActions>
                <div className={classes.buttons}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                  >
                    {t('create_digitial_doc.upload')}
                  </Button>
                </div>
              </DialogActions>
            </div>
          )}

        </Form>
      </Dialog>
    </div>
  );
}

CreateDigitalDocModal.propTypes = {};

CreateDigitalDocModal.defaultProps = {};
