import { createStyles } from '@material-ui/styles';

export default ({ spacing, palette, breakpoints, typography }) => createStyles({
  root: {
    display       : 'flex',
    alignItems    : 'center',
    justifyContent: 'center',
    height        : 'calc(100vh - 56px - 106px)',
  },
  dialog: {
    position       : 'relative',
    backgroundColor: palette.background.primary,
  },
  dialogHeader: {
    [breakpoints.down('xs')]: {
      display: 'none',
    },
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
  dialogBox: {
    [breakpoints.down('xs')]: {
      margin   : 0,
      marginTop: spacing(6),
    },
    margin: spacing(3),
  },
  closeButton: {
    [breakpoints.down('xs')]: {
      top    : spacing(1),
      right  : spacing(1),
      padding: spacing(.5),
    },
    position: 'absolute',
    right   : spacing(3),
    top     : spacing(3),
  },
});
