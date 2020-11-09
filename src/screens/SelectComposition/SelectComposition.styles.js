import { createStyles } from '@material-ui/styles';

export default ({ spacing, palette, breakpoints, typography }) => createStyles({
  root: {
    width  : '100vw',
    height : '100%',
    padding: spacing(5),
  },
  dialog: {
    backgroundColor: palette.background.primary,
  },
  dialogHeader: {
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
    display       : 'flex',
    flexDirection : 'column',
    justifyContent: 'center',
    alignItems    : 'center',
    padding       : spacing(3),
  },
  closeButton: {
    position: 'absolute',
    right   : spacing(3),
    top     : spacing(3),
  },
});
