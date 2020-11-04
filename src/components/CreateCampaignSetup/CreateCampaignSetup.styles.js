import { createStyles } from '@material-ui/styles';

export default ({ typography, palette, spacing, breakpoints }) => createStyles({
  root: {
    position : 'absolute',
    top      : '50%',
    left     : '50%',
    transform: 'translate(-50%, -50%)',
  },
  container: {
    display   : 'flex',
    alignItems: 'flex-end',
    maxWidth  : 1400,
  },
  content: {
    [breakpoints.down('sm')]: {
      width  : '90vw',
      padding: `0px ${spacing(2)}px`,
    },
    width        : '50vw',
    display      : 'flex',
    flexDirection: 'column',
    alignItems   : 'center',
  },
  form: {
    maxWidth: 590,
    width   : '100%',
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
  header: {
    [breakpoints.down('sm')]: {
      fontSize: typography.pxToRem(28),
    },
    fontSize     : typography.pxToRem(37),
    marginBottom : spacing(3),
    textAlign    : 'center',
    letterSpacing: 0.25,
    color        : palette.text.darkPurple,
  },
  inputItem: {
    marginBottom: spacing(2),
  },
  inputHeader: {
    marginBottom: spacing(0.5),
  },
  buttons: {
    display       : 'flex',
    justifyContent: 'flex-end',
  },
});
