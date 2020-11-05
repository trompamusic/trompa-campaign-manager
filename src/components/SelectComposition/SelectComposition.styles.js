import { createStyles } from '@material-ui/styles';

export default ({ spacing, palette, shape, breakpoints, typography }) => createStyles({
  root: {
    display       : 'flex',
    flexDirection : 'column',
    justifyContent: 'center',
    alignItems    : 'center',
    width         : '45vw',
  },
  part: {
    width  : '100%',
    padding: spacing(3),
  },
  inputBox: {
    display      : 'flex',
    flexDirection: 'row',
    width        : '100%',
  },
});
