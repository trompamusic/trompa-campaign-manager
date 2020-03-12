import { createStyles } from '@material-ui/styles';

export default ({ spacing, palette, typography }) => createStyles({
  toolbarTop: {
    height        : 56,
    justifyContent: 'space-between',
    color         : palette.primary.main,
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
});
