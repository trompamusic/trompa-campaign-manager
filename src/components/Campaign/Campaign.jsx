import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import * as PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import AppbarTop from '../AppbarTop/AppbarTop';
import FileMusicIcon from '../Icons/FileMusicIcon';
import styles from './Campaign.styles';

const useStyles = makeStyles(styles);

export default function Campaign ({ campaignIdentifier }) {
  const { t }   = useTranslation();
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppbarTop />
      <div className={classes.section}>
        <Typography variant="h1">
          Lorem, ipsum dolor sit amet consectetur adipisicing.
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nostrum eveniet accusantium ipsum excepturi reiciendis mollitia? Assumenda soluta doloremque fugit! Repellendus accusantium aliquid aperiam corporis obcaecati quia praesentium minima architecto.
        </Typography>
        <div className={classes.creativeWork}>
          <div className={classes.fileMusicIcon}>
            <FileMusicIcon />
          </div>
          <div>
            <Typography variant="h3">
             Lorem, ipsum dolor sit amet consectetur adipisicing.
            </Typography>
            <Typography variant="body1">
              Lorem, ipsum.
            </Typography>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Campaign.propTypes = {
  campaignIdentifier: PropTypes.string,
};
