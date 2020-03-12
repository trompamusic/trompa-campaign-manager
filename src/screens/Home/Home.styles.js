import { createStyles } from '@material-ui/styles';

export default ({ spacing, typography, palette, shape }) => createStyles({
  relative: {
    position: 'relative',
  },
  row: {
    display       : 'flex',
    flexDirection : 'column',
    alignItems    : 'center',
    justifyContent: 'center',
  },
  buttonHero: {
    marginTop    : spacing(),
    padding      : '8px 32px',
    fontFamily   : typography.fontFamilyOpenSans,
    fontSize     : typography.pxToRem(16),
    letterSpacing: '0.66px',
  },
  greatScores: {
    display        : 'flex',
    justifyContent : 'flex-end',
    backgroundColor: palette.common.faintGrey,
    '& section'    : {
      marginTop   : 51,
      marginRight : 96,
      marginBottom: 98,
      width       : 528,
      '& h1'      : {
        marginBottom: spacing(0.5),
      },
      '& p': {
        marginBottom: spacing(2),
      },
    },
  },
  unlockClassics: {
    display       : 'flex',
    justifyContent: 'flex-start',
    '& section'   : {
      marginTop   : 51,
      marginLeft  : 96,
      marginBottom: 98,
      width       : 528,
      '& h1'      : {
        marginBottom: spacing(0.5),
      },
      '& p': {
        marginBottom: spacing(2),
      },
    },
  },
  unlockClassicsImageOverlay: {
    position  : 'absolute',
    bottom    : -40,
    display   : 'flex',
    alignItems: 'flex-end',
    '& span'  : {
      fontFamily : typography.fontFamilyAvenir,
      color      : palette.primary.main,
      fontSize   : 100,
      fontWeight : 900,
      lineHeight : 0.65,
      textShadow : `2px 2px 0px ${palette.common.white}`,
      marginRight: spacing(),
    },
    '& h6': {
      width: 140,
      '& a': {
        textDecoration: 'none',
      },
    },
  },
  stepsTextContainer: {
    display       : 'flex',
    justifyContent: 'flex-end',
    alignItems    : 'center',
    height        : 511,
  },
  stepsTextContent: {
    width     : 566,
    display   : 'flex',
    alignItems: 'flex-start',
    '& h1'    : {
      marginTop : spacing(1.5),
      marginLeft: spacing(3),
      color     : palette.text.purpleBlack,
    },
  },
  number: {
    height         : 65,
    width          : 65,
    minWidth       : 65,
    borderRadius   : '50%',
    backgroundColor: palette.primary.main,
    fontFamily     : typography.fontFamilyAvenir,
    color          : palette.common.white,
    fontSize       : 50,
    fontWeight     : 900,
    textAlign      : 'center',
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
  },
});
