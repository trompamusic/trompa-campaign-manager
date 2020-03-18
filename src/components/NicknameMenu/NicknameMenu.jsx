import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import * as PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Typography from '@material-ui/core/Typography';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Button, Menu, Avatar } from '@material-ui/core';
import styles from './NicknameMenu.styles';

const useStyles = makeStyles(styles);

export default function NicknameMenu ({
  isOpen,
  target,
  handleOpen,
  handleClose,
  onLogoutClick,
  nickname,
}) {
  const { t }           = useTranslation();
  const classes         = useStyles();
  const nicknameInitial = nickname ? nickname.charAt(0).toUpperCase() : null;

  const renderModal = () => {
    return (
      <Menu 
        className={classes.menu}
        open={isOpen}
        anchorEl={target}
        onClose={handleClose}
        PopoverClasses={{ paper: classes.menu }}
      >
        <div className={classes.userInfo}>
          <Avatar className={classes.avatar}>
            {nicknameInitial ? nicknameInitial : '?'}
          </Avatar>
          <Typography className={classes.nicknameMenu}>
            {nickname}
          </Typography>
          <CloseIcon 
            className={classes.closeIcon} 
            aria-label="Close" 
            onClick={handleClose} 
          />
        </div>
        <Button
          onClick={onLogoutClick}
          className={classes.logoutButton} 
          startIcon={<ExitToAppIcon />}
        >
          {t('common:logout')}
        </Button>
      </Menu>
    );
  };

  if (!nickname) {
    return null;
  }

  return (
    <React.Fragment>
      <div className={classes.root} onClick={handleOpen}>
        <Avatar className={classes.avatar}>{nicknameInitial ? nicknameInitial : '?'}</Avatar>
        <Typography className={classes.nickname}>
          {nickname}
        </Typography>
        <ArrowDropDownIcon 
          className={classes.dropdownIcon} 
          onClick={event => handleOpen(event)} 
        />
      </div>
      {renderModal()}
    </React.Fragment>
  );
}

NicknameMenu.propTypes = {
  isOpen       : PropTypes.bool,
  target       : PropTypes.object,
  handleOpen   : PropTypes.func,
  handleClose  : PropTypes.func,
  onLogoutClick: PropTypes.func,
  nickname     : PropTypes.string,
};

NicknameMenu.defaultProps = {};
