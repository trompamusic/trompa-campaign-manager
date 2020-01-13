import { createStyles } from '@material-ui/styles';

export default () => createStyles({
  toolbarTop: {
    height        : 56,
    justifyContent: 'space-between',
    color         : '#005AA3',
  },
  appbarBottom: {
    top   : 'auto',
    bottom: 0,
  },
  toolbarBottom: {
    height        : 56,
    justifyContent: 'flex-end',
  },
  logo: {
    width: 138,
  },
  iframe: {
    border: 'none',
    width : '100%',
    height: 'calc(100vh - 112px)',
  },
});
