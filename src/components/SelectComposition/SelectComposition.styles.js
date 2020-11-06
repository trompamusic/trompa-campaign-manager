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
    '&:first-child': {
      height: '54vh',
      margin: `0px 24px -56px 24px`,
    },
    '&:last-child': {
      margin: `0px 24px -56px 24px`,
    },
    height: '59vh',
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
