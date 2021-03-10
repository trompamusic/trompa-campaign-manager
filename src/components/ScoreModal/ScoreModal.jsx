import React from 'react';
import { Dialog, Toolbar, IconButton, DialogContent } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

export default function ScoreModal({ onClose, isOpen, scoreContainer }){
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
        {scoreContainer}
      </DialogContent>
    </Dialog>
  );
};