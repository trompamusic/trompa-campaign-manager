import { createStyles } from '@material-ui/styles';

export default ({ palette, typography, spacing, breakpoints }) => createStyles({
  daysToGo: {
    marginTop               : spacing(2),
    color                   : palette.primary.main,
    fontSize                : typography.pxToRem(26),
    fontWeight              : 900,
    [breakpoints.only('xs')]: {
    },
  },
  deadline: {
    fontSize: typography.pxToRem(14),
  },
  buttons: {
    display                 : 'flex',
    alignItems              : 'center',
    flexWrap                : 'wrap',
    marginTop               : spacing(3),
    marginBottom            : spacing(3),
    [breakpoints.only('xs')]: {
      marginTop   : spacing(2),
      marginBottom: spacing(2),
    },
  },
  primaryButton: {
    color        : palette.common.white,
    padding      : '8px 32px',
    fontSize     : typography.pxToRem(16),
    letterSpacing: '0.66px',
    marginRight  : spacing(),
  },
  copyAndShareRow: {
    [breakpoints.only('sm')]: {
      display: 'none',
    },
  },
});
