import { createStyles } from '@material-ui/styles';

export default ({ spacing, palette, shape, breakpoints, typography }) => createStyles({
  root: {
    display      : 'flex',
    flexDirection: 'row',
  },
  main: {
    display       : 'flex',
    flexDirection : 'column',
    justifyContent: 'center',
    alignItems    : 'center',
    width         : '45vw',
  },
  formNav: {
    display       : 'flex',
    width         : '100%',
    justifyContent: 'flex-end',
  },
  person: {
    [breakpoints.down('sm')]: {
      display: 'none',
    },
    height: '50vh',
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
