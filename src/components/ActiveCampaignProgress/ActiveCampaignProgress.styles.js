import { createStyles } from '@material-ui/styles';

export default ({ palette, typography, spacing, breakpoints }) => createStyles({
  section: {
    boxShadow: '0 1px 6px 0px rgba(0,0,0,0.1)',
  },
  container: {
    paddingTop              : 48,
    paddingBottom           : 48,
    width                   : '80%',
    margin                  : '0 auto',
    [breakpoints.only('xl')]: {
      paddingTop   : 96,
      paddingBottom: 96,
    },
  },
  checkItem: {
    width    : 200,
    height   : 125,
    textAlign: 'center',
  },
  amountDone: {
    color        : palette.primary.main,
    fontSize     : typography.pxToRem(65),
    fontWeight   : 900,
    marginBottom : spacing(-1),
    textTransform: 'uppercase',
  },
  amountTotal: {
    fontSize     : typography.pxToRem(28),
    fontWeight   : 600,
    textTransform: 'uppercase',
  },
});
