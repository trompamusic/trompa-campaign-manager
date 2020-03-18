import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';

export const NotificationContext = React.createContext({});

export default function NotificationsProvider ({
  children,
}) {
  const [notificationIsOpen, setNotificationIsOpen]   = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType]       = useState('');

  const handleNotification = (type, message) => {
    setNotificationIsOpen(true);
    setNotificationMessage(message);
    setNotificationType(type);
  };

  const handleClose = () => {
    setNotificationIsOpen(false);
    setTimeout(() => {
      setNotificationMessage('');
      setNotificationType('');
    }, 500);
  };

  const state = {
    handleNotification,
  };

  return (
    <NotificationContext.Provider
      value={state}
    >
      {children}
      <Snackbar 
        open={notificationIsOpen} 
        autoHideDuration={6000} 
        onClose={handleClose}
      >
        <Alert 
          onClose={handleClose} 
          severity={notificationType}
          variant="filled"
          action={
            <CloseIcon onClick={handleClose} />
          }
        >
          {notificationMessage}
        </Alert>
      </Snackbar>
    </NotificationContext.Provider>
  );
}
