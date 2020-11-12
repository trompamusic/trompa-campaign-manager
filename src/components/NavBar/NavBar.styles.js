import { createStyles } from '@material-ui/styles';

export default ({ typography, palette, spacing, breakpoints }) => createStyles({
  navLink: {
    fontSize      : typography.pxToRem(15.8),
    letterSpacing : 0.5,
    textDecoration: 'none',
    color         : palette.text.darkGrey,
    fontFamily    : typography.fontFamily,
    marginRight   : spacing(4),
    padding       : 0,
    '& span'      : {
      paddingBottom: spacing(0.3),
      paddingLeft  : '5px',
    },
    [breakpoints.down('md')]: {
      padding: spacing(0.75),
    },
  },
  removeHover: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  navLinkActive: {
    color: palette.primary.main,
  },
  mobile: {
    [breakpoints.up('md')]: {
      display: 'none',
    },
  },
  desktop: {
    [breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  drawerTop: {
    display        : 'flex',
    justifyContent : 'space-between',
    alignItems     : 'center',
    padding        : spacing(2),
    width          : 288,
    boxSizing      : 'border-box',
    backgroundColor: palette.common.faintGrey,
  },
  drawerBody: {
    display      : 'flex',
    flexDirection: 'column',
    flex         : '1 0 auto',
    padding      : spacing(2, 3),
  },
  drawerBottom: {
    display      : 'flex',
    flexDirection: 'column',
    padding      : spacing(2, 3),
  },
  drawerLogo: {
    width: 138,
  },
});
