import { createStyles } from '@material-ui/styles';

export default ({ spacing, typography }) => createStyles({
  root: {
    width  : '100vw',
    height : '100%',
    padding: spacing(5),
  },
  formNav: {
    display       : 'flex',
    width         : '100%',
    justifyContent: 'flex-end',
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
