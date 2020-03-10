import { createStyles } from '@material-ui/styles';

export default ({ typography, palette, spacing }) => createStyles({
  navLink: {
    fontSize      : typography.pxToRem(15.8),
    letterSpacing : 0.5,
    textDecoration: 'none',
    color         : palette.text.darkGrey,
    marginRight   : spacing(4),
  },
  navLinkActive: {
    fontWeight: 600,
    color     : palette.secondary.main,
  },
});
