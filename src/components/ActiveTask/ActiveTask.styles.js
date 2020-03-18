import { createStyles } from '@material-ui/styles';

export default () => createStyles({
  iframe: {
    border: 'none',
    width : '100%',
    height: 'calc(100vh - 112px)',
  },
  emptyIframe: {
    display       : 'flex',
    alignItems    : 'center',
    justifyContent: 'center',
    width         : '100%',
    height        : 'calc(100vh - 112px)',
  },
});
