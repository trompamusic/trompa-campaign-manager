import { createStyles } from '@material-ui/styles';

export default ({ typography, palette, spacing, breakpoints }) => createStyles({
  navLink: {
    fontSize      : typography.pxToRem(15.8),
    letterSpacing : 0.5,
    textDecoration: 'none',
    color         : palette.text.darkGrey,
    marginRight   : spacing(4),
  },
  navLinkActive: {
    fontWeight: 600,
    color     : palette.primary.main,
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
    backgroundColor: palette.common.faintGrey,
  },
  drawerLogo: {
    width: 138,
  },
});
