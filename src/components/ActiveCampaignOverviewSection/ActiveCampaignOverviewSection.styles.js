import { createStyles } from '@material-ui/styles';

export default ({ palette }) => createStyles({
  '@global': {
    ".slider-control-bottomcenter ul": {
      top: '60px !important',
    },
  },
  root: {
    backgroundColor: palette.common.faintGrey,
    padding        : 96,
    paddingTop     : 48,
  },
  heading: {
    marginLeft: 25,
  },
});
