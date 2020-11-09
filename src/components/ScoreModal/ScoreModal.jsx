import React from 'react';
import { Dialog, Toolbar, IconButton, DialogContent } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ScoreContainer from '../../containers/ScoreContainer/ScoreContainer';

export default function ScoreModal({ onClose, isOpen }){
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      fullScreen
    > 
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
          <CloseIcon />
        </IconButton>
      </Toolbar>
      <DialogContent>
        <ScoreContainer showControl fullScreen />
      </DialogContent>
    </Dialog>
  );
};