import { createStyles } from '@material-ui/styles';

export default ({ palette }) => createStyles({
  root: {
    color     : '#eaeaf0',
    display   : 'flex',
    height    : 22,
    alignItems: 'center',
  },
  circle: {
    width          : 5,
    height         : 5,
    marginTop      : 2.5,
    borderRadius   : '50%',
    backgroundColor: palette.common.borderGrey,
  },
  active: {
    backgroundColor: '#784af4',
  },
});
