import { createStyles } from '@material-ui/styles';

export default ({ spacing, palette }) => createStyles({
  root: {
    width  : '100vw',
    height : '100%',
    padding: spacing(5),
  },
  dialog: {
    backgroundColor: palette.background.primary,
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
