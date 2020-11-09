import { createStyles } from '@material-ui/styles';

export default ({ spacing, palette, shape, breakpoints, typography }) => createStyles({
  root: {
    display      : 'flex',
    flexDirection: 'row',
  },
  main: {
    display       : 'flex',
    flexDirection : 'column',
    justifyContent: 'center',
    alignItems    : 'center',
    width         : '45vw',
  },
  formNav: {
    display       : 'flex',
    width         : '100%',
    justifyContent: 'flex-end',
  },
  person: {
    [breakpoints.down('sm')]: {
      display: 'none',
    },
    height: '50vh',
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
