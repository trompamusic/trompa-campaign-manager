import React, { useState } from "react";
import * as PropTypes from 'prop-types';
import { Avatar, Box, Button, Card, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import Launch from '@material-ui/icons/Launch';
import { useTranslation } from 'react-i18next';
import ScorePlaceholderIcon from "../Icons/ScorePlaceholderIcon";
import { truncateLabel } from "../../utils";
import styles from './SelectScoreItem.styles';

const useStyles = makeStyles(styles);

export default function SelectScoreItem({ item, isActiveCampaign, progress, onItemClick }){
  const { t }                               = useTranslation('selectComposition');
  const classes                             = useStyles();
  const [hover, setHover]                   = useState(false);
  const [buttonBarHover, setButtonBarHover] = useState(false);
  const maxChars                            = 200;

  return (
    <Card 
      className={classes.item} 
      elevation={hover? 4:2} 
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={() => !buttonBarHover? onItemClick() : null}
    >
      <Box className={classes.imgBox}>
        <Avatar className={classes.img} src={item?.image} alt={item?.name || ""}>
          <ScorePlaceholderIcon />
        </Avatar>
      </Box>
      <Box className={classes.itemMain}>
        <Box className={classes.itemHeader}>
          <Typography variant="h3" color="primary">{item?.title || ""}</Typography>
          <Box className={classes.itemButtonBox} onMouseOver={() => setButtonBarHover(true)} onMouseOut={() => setButtonBarHover(false)} >
            {item?.format && item?.source && 
              <FileButton item={item} classes={classes} t={t} /> 
            }
            {isActiveCampaign && 
              <a href={'<campaignlink>'} target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="contained" 
                  size="small" 
                  color="primary"
                >
                  <Launch className={classes.icon} />
                  {t('active_campaign')}
                </Button>
              </a>
            }
          </Box>
        </Box>
        <Box>
          <Typography>{item?.subject}</Typography>
          <Typography className={classes.itemDescription} variant="body2">{truncateLabel(item?.description, maxChars)}</Typography>
          <Typography>
            {item?.creator && `${t('created_by')} ${item?.creator}`}
            {(item?.creator && item?.publisher) && ` • `}
            {item?.publisher && `${t('published_by')} ${item?.publisher}`}
          </Typography>
        </Box>
      </Box>
      {isActiveCampaign && 
        <Box className={classes.progressBar}>
          <Box className={classes.progress} style={{ width: `${progress}%` }}>&nbsp;</Box>
        </Box>
      }
    </Card>
  );
}
const FileButton = ({ item, t, classes }) => {
  const getFileType = format => {
    switch(format){
    case "application/pdf":          return "pdf";
    case "application/musicxml+zip": return "mxl";
    default: return;
    }
  };
  const fileType    = getFileType(item.format);

  if(!fileType) return "";

  return (
    <a href={item.source} target="_blank" rel="noopener noreferrer">
      <IconButton aria-label={t(fileType)}>
        <InsertDriveFileIcon className={classes.icon} />
        <Typography>{t(fileType)}</Typography>
      </IconButton>
    </a>
  );
};

SelectScoreItem.propTypes = {
  item            : PropTypes.object,
  isActiveCampaign: PropTypes.bool,
  progress        : PropTypes.number,
  onItemClick     : PropTypes.func,
};

SelectScoreItem.defaultProps = {
  isActiveCampaign: false,
};