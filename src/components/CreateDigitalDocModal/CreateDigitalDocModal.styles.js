import { createStyles } from '@material-ui/styles';

export default ({ spacing, breakpoints, typography, palette }) => createStyles({
  root: {
    width: '50%',
  },
  title: {
    display       : 'flex',
    justifyContent: 'space-between',
  },
  header: {
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
  textField: {
    paddingTop: spacing(1),
  },
  container: {
    position: 'relative',
    margin  : '0 auto',
    width   : '100%',
  },
  buttons: {
    marginRight: spacing(2),
  },
});
