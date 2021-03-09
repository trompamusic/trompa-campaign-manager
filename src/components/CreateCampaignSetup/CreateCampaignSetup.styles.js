import { createStyles } from '@material-ui/styles';

export default ({ typography, palette, spacing, breakpoints }) => createStyles({
  root: {
    position : 'absolute',
    top      : 'calc(56px + 50%)',
    left     : '50%',
    transform: 'translate(-50%, -50%)',
  },
  container: {
    display   : 'flex',
    alignItems: 'center',
  },
  content: {
    [breakpoints.down('sm')]: {
      width  : '90vw',
      padding: `0px ${spacing(2)}px`,
    },
    width        : '40vw',
    display      : 'flex',
    flexDirection: 'column',
    alignItems   : 'center',
    maxWidth     : 655,
  },
  form: {
    maxWidth: 590,
    width   : '100%',
  },
  person: {
    [breakpoints.down('sm')]: {
      display: 'none',
    },
    height: '40vh',
    margin: spacing(4),
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
