import { createStyles } from '@material-ui/styles';

export default ({ spacing }) => createStyles({
  root: {
    height        : '100vh',
    display       : 'flex',
    alignItems    : 'center',
    justifyContent: 'center',
    flexDirection : 'column',
  },
  buttonRow: {
    display       : 'flex',
    justifyContent: 'center',
    marginTop     : spacing(4),
  },
});
