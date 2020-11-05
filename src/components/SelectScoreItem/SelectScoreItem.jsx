import React, { useState } from "react";
import { Box, Button, Card, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { useTranslation } from 'react-i18next';
import { truncateLabel } from "../../utils";
import styles from './SelectScoreItem.styles';

const useStyles = makeStyles(styles);

export default function SelectScoreItem({ item, isActiveCampaign, progress, onItemClick }){
  const { t }                   = useTranslation('selectComposition');
  const classes                 = useStyles();
  const [hover, setHover]       = useState(false);
  const [pdfHover, setPdfHover] = useState(false);
  const maxChars                = 200;
  
  const parse       = str => str || "";
  const onCardClick = () =>  (!pdfHover)? onItemClick() : null;
  
  return (
    <Card 
      className={classes.item} 
      elevation={hover? 4:2} 
      onMouseOver={e => setHover(true)}
      onMouseOut={e => setHover(false)}
      onClick={e => onCardClick()}
    >
      <Box className={classes.itemImg}>
        {item?.img && <img src={item?.img} alt={parse(item?.name)} />}
      </Box>
      <Box className={classes.itemMain}>
        <Box className={classes.itemHeader}>
          <Typography variant="h3" color="primary">{parse(item?.title)}</Typography>
          <Box className={classes.itemButtonBox}>
            {item?.format === "application/pdf" && 
              <a href={item?.source} target="_blank" rel="noopener noreferrer">
                <IconButton 
                  aria-label="PDF" 
                  onMouseOver={e => setPdfHover(true)}
                  onMouseOut={e => setPdfHover(false)} 
                >
                  <InsertDriveFileIcon className={classes.icon} />
                  <Typography>{t('pdf')}</Typography>
                </IconButton>
              </a>
            }
            {isActiveCampaign && 
              <Button 
                variant="contained" 
                size="small" 
                color="primary"
              >
                <ExitToApp className={classes.icon} />
                {t('activeCampaign')}
              </Button>
            }
          </Box>
        </Box>
        <Box>
          <Typography>{item?.subject}</Typography>
          <Typography className={classes.itemDescription} variant="body2">{truncateLabel(item?.description, maxChars)}</Typography>
          <Typography>
            {item?.creator && `Created by ${item?.creator}`}
            {(item?.creator && item?.publisher) && ` • `}
            {item?.publisher && `Published by ${item?.publisher}`}
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