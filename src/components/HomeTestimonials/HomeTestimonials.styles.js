import { createStyles } from '@material-ui/styles';
import images from '../../theme/images';

export default ({ spacing, typography, palette, shape, breakpoints }) => createStyles({
  root: {
    display       : 'flex',
    alignItems    : 'center',
    justifyContent: 'center',
    flexDirection : 'column',
    boxSizing     : 'border-box',
    paddingTop    : 98,
    paddingBottom : 98,
    background    : `url(${images.supportedBy})`,
    backgroundSize: 'cover',
    '& h2'        : {
      color: palette.common.white,
    },
    [breakpoints.down('md')]: {
      paddingTop   : 47,
      paddingBottom: 47,
    },
  },
  container: {
    display                 : 'flex',
    alignItems              : 'center',
    justifyContent          : 'center',
    flexWrap                : 'wrap',
    [breakpoints.down('md')]: {
      maxWidth: 400,
    },
  },
  testimonialItem: {
    position       : 'relative',
    marginTop      : 35,
    marginRight    : spacing(2),
    boxSizing      : 'border-box',
    padding        : spacing(3),
    height         : 184,
    width          : 393,
    borderRadius   : shape.borderRadius,
    backgroundColor: palette.common.white,
    boxShadow      : '0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.2)',
    '& svg'        : {
      position: 'absolute',
      top     : -20,
      left    : -5,
      width   : 90,
      height  : 30,
    },
    '&:not($testimonialHead) > p': {
      fontSize: typography.pxToRem(13.82),
    },
    '&:last-child': {
      marginRight: 0,
    },
    [breakpoints.only('xs')]: {
      width : 288,
      height: 'auto',
    },
    [breakpoints.down('md')]: {
      marginRight: 0,
    },
  },
  testimonialHead: {
    display       : 'flex',
    alignItems    : 'center',
    justifyContent: 'flex-start',
    marginBottom  : spacing(3),
    '& img'       : {
      height      : 52,
      width       : 52,
      borderRadius: 60,
      marginRight : spacing(2),
    },
    '& h2': {
      margin: 0,
    },
  },
});
