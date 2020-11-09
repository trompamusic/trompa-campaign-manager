import React from "react";
import PropTypes from 'prop-types';
import { Box, Button, Card, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from "react-i18next";
import UploadIcon from "../Icons/UploadIcon";

import SelectScoreItem from "../SelectScoreItem/SelectScoreItem";
import styles from './SelectScoreModal.styles';

const useStyles = makeStyles(styles);

export default function SelectScoreModal({ composition, onLoadScore, onSelectFileClick }){
  const { t }   = useTranslation('selectComposition');
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box>
        {composition?.workExample?.map(item => (
          // TODO: use isActiveCampaign & progress from CE data (once available)
          <SelectScoreItem
            key={item.identifier}
            item={item}
            isActiveCampaign={false}
            progress={60}
            onItemClick={() => onLoadScore(item)}
          />
        ))}
        <Card className={classes.uploadCard} elevation={0}>
          <Typography variant="h3" className={classes.uploadCardText}>{t('cant_find')}</Typography>
          <Typography variant="body1" className={classes.uploadCardText}>{t('use_link')}</Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.uploadCardButton}
            aria-label={t('share_link')}
            onClick={onSelectFileClick}
          >
            <UploadIcon className={classes.icon} />
            {t('share_link')}
          </Button>
        </Card>
      </Box>
    </Container>
  );
}
SelectScoreModal.propTypes = {
  composition      : PropTypes.object,
  onLoadScore      : PropTypes.func,
  onSelectFileClick: PropTypes.func,
};
