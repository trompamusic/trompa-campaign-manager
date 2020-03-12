import { createStyles } from '@material-ui/styles';

export default ({ typography, palette, spacing, shape }) => createStyles({
  root: {
    position : 'absolute',
    top      : '50%',
    left     : '50%',
    transform: 'translate(-50%, -50%)',
  },
  content: {
    width        : '40vw',
    display      : 'flex',
    flexDirection: 'column',
    alignItems   : 'center',
  },
  person: {
    '&:first-child': {
      height: '54vh',
    },
    '&:last-child': {
      marginLeft: spacing(3),
    },
    height: '59vh',
    margin: `0px ${spacing(5.5)}px -${spacing(7)}px ${spacing(5.5)}px`,
  },
  goal: {
    fontSize     : typography.pxToRem(37),
    padding      : `0px ${spacing(2)}px`,
    marginBottom : spacing(3),
    textAlign    : 'center',
    letterSpacing: 0.25,
    color        : palette.text.darkPurple,
  },
  body: {
    '&:last-child': {
      marginBottom: spacing(),
    },
    fontSize     : typography.pxToRem(16),
    letterSpacing: 0.5,
  },
  fullWidth: {
    width: '100%',
  },
  tip: {
    marginTop    : spacing(0.5),
    alignSelf    : 'start',
    fontSize     : typography.pxToRem(12),
    letterSpacing: 0.5,
    color        : palette.text.transparentGrey,
  },
  nicknameTaken: {
    display        : 'flex',
    alignItems     : 'center',
    maxWidth       : '40vw',
    marginTop      : spacing(3),
    padding        : `${spacing(1.25)}px ${spacing(2)}px `,
    borderRadius   : shape.borderRadius,
    backgroundColor: palette.background.primary,
  },
  missingPersonIcon: {
    marginRight: spacing(2),
    color      : palette.primary.main,
  },
  warning: {
    margin       : 0,
    fontSize     : typography.pxToRem(14),
    letterSpacing: 0.25,
  },
});
