import { createStyles } from '@material-ui/styles';

export default ({ spacing, breakpoints }) => createStyles({
  aboutTrompaSection: {
    display       : 'flex',
    alignItems    : 'center',
    justifyContent: 'center',
    '& h2'        : {
      marginTop   : 51,
      textAlign   : 'center',
      marginBottom: spacing(3),
    },
    '& p': {
      marginLeft : 'auto',
      marginRight: 'auto',
    },
    [breakpoints.only('xs')]: {
      justifyContent: 'flex-start',
      marginLeft    : spacing(4),
      marginRight   : spacing(4),
      '& h2'        : {
        textAlign   : 'left',
        marginBottom: spacing(),
      },
      '& p': {
        margin: 0,
      },
    },
  },
  squareLogos      : {},
  partnersContainer: {
    textAlign           : 'center',
    maxWidth            : 1250,
    margin              : 45,
    '& $squareLogos img': {
      height: 70,
    },
    '& img': {
      height      : 50,
      marginRight : spacing(4),
      marginLeft  : spacing(4),
      marginBottom: spacing(4),
    },
    [breakpoints.only('xs')]: {
      '& img': {
        marginLeft : spacing(2),
        marginRight: spacing(2),
      },
    },
  },
});
