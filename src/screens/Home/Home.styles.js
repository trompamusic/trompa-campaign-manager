import { createStyles } from '@material-ui/styles';

export default ({ spacing, typography }) => createStyles({
  row: {
    display       : 'flex',
    alignItems    : 'center',
    justifyContent: 'center',
  },
  buttonHero: {
    marginTop    : spacing(),
    padding      : '8px 32px',
    fontFamily   : typography.fontFamilyOpenSans,
    fontSize     : typography.pxToRem(16),
    letterSpacing: '0.66px',
  },
});
