import { createStyles } from '@material-ui/styles';

export default ({ spacing, typography }) => createStyles({
  root: {
    position  : 'relative',
    width     : 1440,
    height    : 600,
    display   : 'flex',
    alignItems: 'center',
    background: 'linear-gradient(105deg, rgba(255,255,255,1) 65.9%, rgba(255,140,2,1) 66%, rgba(244,87,49,1) 100%)',
  },
  contentSection: {
    marginLeft  : 92,
    marginBottom: 170,
    width       : 475,
    height      : 50,
    zIndex      : 10,
  },
  subtitle: {
    display     : 'flex',
    alignItems  : 'center',
    marginBottom: spacing(0.5),
  },
  logoIcon: {
    width      : 15,
    height     : 14,
    marginRight: spacing(0.5),
  },
  buttonHero: {
    marginTop    : spacing(),
    padding      : '8px 32px',
    fontFamily   : typography.fontFamilyOpenSans,
    fontSize     : typography.pxToRem(16),
    letterSpacing: '0.66px',
  },
  image: {
    position: 'absolute',
    width   : '50%',
    height  : 'auto',
    right   : 92,
  },
});
