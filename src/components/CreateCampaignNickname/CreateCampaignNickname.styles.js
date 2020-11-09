import { createStyles } from '@material-ui/styles';

export default ({ typography, palette, spacing, shape, breakpoints }) => createStyles({
  root: {
    position : 'absolute',
    top      : '50%',
    left     : '50%',
    transform: 'translate(-50%, -50%)',
  },
  container: {
    display   : 'flex',
    alignItems: 'flex-end' ,
  },
  content: {
    [breakpoints.down('sm')]: {
      width: '90vw',
    },
    width        : '40vw',
    display      : 'flex',
    flexDirection: 'column',
    alignItems   : 'center',
  },
  person: {
    [breakpoints.down('sm')]: {
      display: 'none',
    },
    '&:first-child': {
      height: '54vh',
    },
    '&:last-child': {
      marginLeft: spacing(3),
    },
    height: '59vh',
    margin: `0px ${spacing(5.5)}px -${spacing(7)}px ${spacing(5.5)}px`,
  },
  goal: {
    [breakpoints.down('sm')]: {
      fontSize: typography.pxToRem(28),
    },
    fontSize     : typography.pxToRem(37),
    padding      : `0px ${spacing(2)}px`,
    marginBottom : spacing(3),
    textAlign    : 'center',
    letterSpacing: 0.25,
    color        : palette.text.darkPurple,
  },
  body: {
    '&:last-child': {
      marginBottom: spacing(),
    },
    fontSize     : typography.pxToRem(16),
    letterSpacing: 0.5,
  },
  inputHeader: {
    marginBottom: spacing(0.5),
  },
  tip: {
    marginTop    : spacing(0.5),
    marginBottom : spacing(2),
    alignSelf    : 'start',
    fontSize     : typography.pxToRem(12),
    letterSpacing: 0.5,
    color        : palette.text.transparentGrey,
  },
  buttons: {
    display       : 'flex',
    justifyContent: 'flex-end',
  },
});
