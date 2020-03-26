import { createStyles } from '@material-ui/styles';

export default ({ spacing }) => createStyles({
  root: {
    display       : 'flex',
    flexDirection : 'column',
    alignItems    : 'center',
    justifyContent: 'center',
    height        : '100vh',
    padding       : '48px 0',
  },
  container: {
    maxWidth: 550,
    padding : '0 48px',
  },
  heroImage: {
    maxWidth: 500,
    width   : '55%',
    height  : 'auto',
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
