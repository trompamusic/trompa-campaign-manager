import React from "react";
import PropTypes from 'prop-types';
import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import SelectScoreItem from "../SelectScoreItem/SelectScoreItem";
import styles from './SelectScoreModal.styles';

const useStyles = makeStyles(styles);

export default function SelectScoreModal({ composition, onLoadScore }){
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box>
        {composition?.workExample?.map(item => (
          // TODO: use isActiveCampaign & progress from CE data (once available)
          <SelectScoreItem 
            item={item} 
            isActiveCampaign={false}
            progress={60}
            onItemClick={() => onLoadScore(item)}
          />
        ))}
      </Box>
    </Container>
  );
}
SelectScoreModal.propTypes = {
  composition: PropTypes.object,
  onLoadScore: PropTypes.func,
};