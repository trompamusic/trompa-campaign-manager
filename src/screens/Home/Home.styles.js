import { createStyles } from '@material-ui/styles';

export default ({ palette, spacing }) => createStyles({
  logo: {
    marginBottom: spacing(4),
  },
  hero: {
    display        : 'flex',
    alignItems     : 'center',
    justifyContent : 'center',
    flexDirection  : 'column',
    height         : '50vh',
    backgroundColor: palette.primary.main,
    color          : palette.primary.contrastText,
  },
});
