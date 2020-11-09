import { createStyles } from '@material-ui/styles';

export default () => createStyles({
  root: {
    width: '50%',
  },
  title: {
    display       : 'flex',
    justifyContent: 'space-between',
  },
  container: {
    position: 'relative',
    margin  : '0 auto',
    width   : '100%',
  },
});