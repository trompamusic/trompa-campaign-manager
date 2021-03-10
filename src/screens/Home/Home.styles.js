import { createStyles } from '@material-ui/styles';

export default ({ spacing, typography }) => createStyles({
  relative: {
    position: 'relative',
  },
  buttonHero: {
    marginTop    : spacing(),
    padding      : '8px 32px',
    fontFamily   : typography.fontFamilyOpenSans,
    fontSize     : typography.pxToRem(16),
    letterSpacing: '0.66px',
  },
  spinner: {
    width         : '100%',
    display       : 'flex',
    justifyContent: 'center',
    marginTop     : spacing(5),
  },
});
