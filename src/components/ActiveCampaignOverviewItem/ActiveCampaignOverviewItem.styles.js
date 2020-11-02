import { createStyles } from '@material-ui/styles';

export default ({ palette, spacing, typography, breakpoints }) => createStyles({
  root: {
    maxWidth       : 244,
    backgroundColor: palette.common.white,
  },
  imageContainer: {
    padding                 : 5,
    textAlign               : 'center',
    backgroundColor         : palette.border.lightGrey,
    [breakpoints.only('xs')]: {
      display: 'none',
    },
  },
  image: {
    width : 144,
    height: 203,
  },
  metaContainer: {
    padding  : spacing(),
    minHeight: 75,
  },
  caption: {
    color        : palette.primary.main,
    fontFamily   : "Open Sans",
    fontSize     : typography.pxToRem(12),
    fontWeight   : 600,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  title: {
    fontSize    : typography.pxToRem(21),
    marginBottom: 0,
  },
});
