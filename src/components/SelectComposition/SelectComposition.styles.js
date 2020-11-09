import { createStyles } from '@material-ui/styles';

export default ({ spacing, palette, shape, breakpoints, typography }) => createStyles({
  root: {
    display      : 'flex',
    flexDirection: 'row',
  },
  main: {
    [breakpoints.down('sm')]: {
      width: '95%',
    },
    width         : '45vw',
    display       : 'flex',
    flexDirection : 'column',
    justifyContent: 'center',
    alignItems    : 'center',
  },
  header: {
    [breakpoints.down('sm')]: {
      fontSize: typography.pxToRem(28),
    },
    fontSize     : typography.pxToRem(37),
    padding      : `0px ${spacing(2)}px`,
    marginBottom : spacing(3),
    textAlign    : 'center',
    letterSpacing: 0.25,
    color        : palette.text.darkPurple,
  },
  textfield: {
    '& input': {
      padding: spacing(2),
    },
  },
  formNav: {
    display       : 'flex',
    width         : '100%',
    justifyContent: 'flex-end',
  },
  subText: {
    fontSize  : typography.pxToRem(12),
    paddingTop: spacing(1),
    color     : palette.text.lightBlack,
  },
  person: {
    [breakpoints.down('sm')]: {
      display: 'none',
    },
    '&:first-child': {
      height: '54vh',
      margin: `0px 24px -56px 24px`,
    },
    '&:last-child': {
      margin: `0px 24px -56px 24px`,
    },
    height: '59vh',
  },
  part: {
    width  : '100%',
    padding: spacing(3),
  },
  inputBox: {
    display      : 'flex',
    flexDirection: 'row',
    width        : '100%',
  },
});
