import { createStyles } from '@material-ui/styles';

export default ({ palette, typography, spacing }) => createStyles({
  daysToGo: {
    color     : palette.primary.main,
    fontSize  : typography.pxToRem(26),
    fontWeight: 900,
  },
  deadline: {
    fontSize: typography.pxToRem(14),
  },
  buttons: {
    marginTop : spacing(),
    display   : 'flex',
    alignItems: 'center',
  },
  primaryButton: {
    color        : palette.common.white,
    padding      : '8px 32px',
    fontSize     : typography.pxToRem(16),
    letterSpacing: '0.66px',
  },
});
