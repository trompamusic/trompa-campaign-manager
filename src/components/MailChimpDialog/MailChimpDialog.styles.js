import { createStyles } from '@material-ui/styles';

export default ({ spacing }) => createStyles({
  root: {
    height       : 600,
    width        : 600,
    paddingBottom: spacing(3),
  },
  closeButton: {
    position: 'absolute',
    right   : spacing(),
    top     : spacing(),
    zIndex  : 10,
  },
});
