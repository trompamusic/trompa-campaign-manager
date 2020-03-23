import { createStyles } from '@material-ui/styles';

export default ({ spacing, palette, typography, breakpoints }) => createStyles({
  dense: {
    height        : 56,
    justifyContent: 'space-between',
    color         : palette.primary.main,
    alignItems    : 'center',
    fontFamily    : typography.fontFamilyOpenSans,
    '& img'       : {
      transform: 'translateY(10%)',
    },
  },
  logo: {
    width: 138,
  },
  link: {
    textDecoration: 'none',
  },
  header: {
    display     : 'flex',
    alignItems  : 'center',
    paddingRight: spacing(2),
  },
  backIcon: {
    '&:hover': {
      cursor: 'pointer',
    },
    [breakpoints.down('sm')]: {
      marginRight: spacing(2),
    },
    fontSize   : 24,
    marginRight: spacing(3),
    color      : palette.primary.main,
  },
  pageType: {
    fontSize     : typography.pxToRem(14),
    lineHeight   : 1.1,
    letterSpacing: 0.5,
    color        : palette.primary.main,
  },
  title: {
    fontSize     : typography.pxToRem(22),
    lineHeight   : 1.1,
    fontWeight   : 'bold',
    letterSpacing: 0.25,
    color        : palette.text.darkPurple,
  },
  mobile: {
    position      : 'relative',
    justifyContent: 'center',
  },
  hamburger: {
    position : 'absolute',
    left     : 16,
    marginTop: 2,
    '& svg'  : {
      color: palette.common.black,
    },
  },
});
