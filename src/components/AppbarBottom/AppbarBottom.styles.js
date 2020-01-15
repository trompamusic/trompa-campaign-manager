import { createStyles } from '@material-ui/styles';

export default () => createStyles({
  appbarBottom: {
    top   : 'auto',
    bottom: 0,
  },
  toolbarBottom: {
    height        : 56,
    justifyContent: 'flex-end',
  },
});
