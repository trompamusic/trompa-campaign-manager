import { createStyles } from '@material-ui/styles';

export default ({ palette, breakpoints }) => createStyles({
  '@global': {
    ".slider-list": {
      minHeight               : 360,
      [breakpoints.only('xs')]: {
        minHeight: 0,
      },
    },
    ".slider-control-bottomcenter ul": {
      top                     : '60px !important',
      [breakpoints.only('xs')]: {
        display: 'none !important',
      },
    },
    // fixes ghosting rendering issue of scrolling on iOS
    ".slider-frame": {
      transform: 'none !important',
    },
  },
  root: {
    backgroundColor         : palette.common.faintGrey,
    boxShadow               : 'inset 0 1px 3px 0px rgba(0,0,0,0.1)',
    padding                 : 96,
    paddingTop              : 48,
    [breakpoints.only('xs')]: {
      padding: 32,
    },
  },
  heading: {
    marginLeft: 25,
  },
});
