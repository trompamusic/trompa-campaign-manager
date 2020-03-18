import { createStyles } from '@material-ui/styles';

export default ({ spacing, typography, palette, breakpoints }) => createStyles({
  root: {
    boxShadow               : '0 0px 6px 0px rgba(0,0,0,0.1)',
    [breakpoints.only('sm')]: {
      marginTop: spacing(6),
    },
    [breakpoints.only('xs')]: {
      marginTop: spacing(10),
    },

  },
  stepsTextContainer: {
    display                 : 'flex',
    justifyContent          : 'flex-end',
    padding                 : '46px 60px',
    alignItems              : 'center',
    height                  : 511,
    [breakpoints.down('sm')]: {
      order         : 2,
      height        : 'auto',
      paddingTop    : spacing(1.5),
      paddingLeft   : spacing(4),
      paddingRight  : spacing(4),
      justifyContent: 'flex-start',
    },
  },
  stepsImageContainer: {
    display       : 'flex',
    justifyContent: 'flex-start',
    padding       : '46px 60px',
    alignItems    : 'center',
    height        : 511,
    '& img'       : {
      width                   : '80%',
      maxWidth                : 550,
      [breakpoints.only('xs')]: {
        width: '100%',
      },
      [breakpoints.only('sm')]: {
        width: '60%',
      },
    },
    [breakpoints.down('sm')]: {
      order         : 1,
      height        : 'auto',
      margin        : '0 auto',
      paddingBottom : spacing(1.5),
      justifyContent: 'flex-start',
    },
  },
  stepsTextContent: {
    width     : 566,
    display   : 'flex',
    alignItems: 'center',
    '& h2'    : {
      marginLeft  : spacing(3),
      marginBottom: 0,
      color       : palette.text.purpleBlack,
    },
  },
  number: {
    height                  : 65,
    width                   : 65,
    minWidth                : 65,
    borderRadius            : '50%',
    backgroundColor         : palette.primary.main,
    color                   : palette.common.white,
    fontFamily              : typography.fontFamilyOpenSans,
    fontSize                : typography.pxToRem(50),
    fontWeight              : 900,
    textAlign               : 'center',
    [breakpoints.only('xs')]: {
      height  : 40,
      width   : 40,
      minWidth: 40,

      fontSize: typography.pxToRem(30),

    },
  },
  stepWithGradient: {
    background : 'linear-gradient(90deg, rgba(255,140,2,1) 50%, rgba(244,87,49,1) 100%)',
    '& $number': {
      backgroundColor: palette.common.white,
      color          : palette.text.purpleBlack,
    },
    '& $stepsTextContainer': {
      justifyContent: 'flex-start',
    },
    '& $stepsImageContainer': {
      justifyContent          : 'flex-end',
      [breakpoints.down('sm')]: {
        justifyContent: 'flex-start',
      },
    },
  },
});
