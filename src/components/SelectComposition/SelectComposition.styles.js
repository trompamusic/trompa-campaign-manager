import { createStyles } from '@material-ui/styles';

export default ({ spacing, palette, breakpoints, typography }) => createStyles({
  root: {
    position     : 'absolute',
    top          : '50%',
    left         : '50%',
    transform    : 'translate(-50%, -50%)',
    display      : 'flex',
    flexDirection: 'row',
  },
  content: {
    [breakpoints.down('sm')]: {
      width: '90vw',
    },
    width         : '40vw',
    display       : 'flex',
    flexDirection : 'column',
    justifyContent: 'center',
    alignItems    : 'center',
    maxWidth      : 655,
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
    height: '40vh',
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
  selectInput: {
    width          : '100%',
    height         : 36,
    display        : 'flex',
    alignItems     : 'center',
    justifyContent : 'space-between',
    padding        : spacing(1.5, 2),
    backgroundColor: palette.common.darkGrey,
    borderRadius   : 4,
  },
  selectInputText: {
    flex: 1,
  },
  selectInputTextNoValue: {
    color: palette.common.darkerGrey,
  },
});
