import { createStyles } from '@material-ui/styles';

export default () => createStyles({
  appbarBottom: {
    top      : 'auto',
    bottom   : 0,
    boxShadow: '0px -3px 6px 0px rgba(0,0,0,0.3)',
  },
  toolbarBottom: {
    height        : 56,
    justifyContent: 'flex-end',
  },
});
