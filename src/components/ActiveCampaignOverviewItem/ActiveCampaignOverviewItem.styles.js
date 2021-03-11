import { createStyles } from '@material-ui/styles';

export default ({ palette, spacing, typography, breakpoints }) => createStyles({
  root: {
    maxWidth       : 244,
    margin         : 'auto',
    backgroundColor: palette.common.white,
  },
  imageContainer: {
    padding        : 5,
    textAlign      : 'center',
    backgroundColor: palette.border.lightGrey,
  },
  image: {
    width                   : 144,
    height                  : 203,
    [breakpoints.only('xs')]: {
      width : 96,
      height: 136,
    },
  },
  metaContainer: {
    padding                 : spacing(),
    minHeight               : 75,
    [breakpoints.only('xs')]: {
      minHeight: 100,
    },
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
