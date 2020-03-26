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
      width      : '90%',
      maxWidth   : 1200,
      marginLeft : 'auto',
      marginRight: 'auto',
    },
    [breakpoints.only('xs')]: {
      justifyContent: 'flex-start',
      marginLeft    : spacing(4),
      '& h2'        : {
        textAlign   : 'left',
        marginBottom: spacing(),
      },
      '& p': {
        margin: 0,
      },
    },
  },
  partnersContainer: {
    display       : 'flex',
    alignItems    : 'center',
    justifyContent: 'center',
    flexWrap      : 'wrap',
    width         : '90%',
    maxWidth      : 1250,
    margin        : 45,
    transform     : 'translateX(5%)',
    '& img'       : {
      height        : 50,
      marginRight   : 140,
      marginBottom  : 60,
      '&:last-child': {
        marginRight: 0,
      },
    },
    [breakpoints.down('md')]: {
      margin : 20,
      '& img': {
        marginRight : 70,
        marginBottom: 30,
      },
    },
    [breakpoints.only('xs')]: {
      justifyContent: 'flex-start',
      margin        : 0,
      marginTop     : spacing(2),
      width         : 320,
      transform     : 'translateX(0%)',
      '& img'       : {
        height: 'auto',
        width : 240,
      },
      '& $verticalLogo': {
        height: 110,
        width : 'auto',
      },
    },
  },
  verticalLogo: {
    height: 50,
    width : 'auto',
  },
  smallLogo: {
    height: '85px !important',
    width : 'auto',
  },
});
