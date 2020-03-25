import { createStyles } from '@material-ui/styles';

export default ({ spacing }) => createStyles({
  root: {
    display       : 'flex',
    flexDirection : 'column',
    alignItems    : 'center',
    justifyContent: 'center',
    height        : '100vh',
    padding       : 48,
  },
  container: {
    maxWidth: 550,
  },
  heroImage: {
    width   : '70%',
    maxWidth: 500,
  },
  logoBlock: {
    display     : 'flex',
    alignItems  : 'center',
    marginBottom: spacing(0.5),
  },
  logoIcon: {
    width      : 16,
    height     : 15,
    marginRight: spacing(0.7),
  },
});
