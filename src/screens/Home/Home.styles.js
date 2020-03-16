import { createStyles } from '@material-ui/styles';
import images from '../../theme/images';

export default ({ spacing, typography, palette, shape, breakpoints }) => createStyles({
  relative: {
    position: 'relative',
  },
  buttonHero: {
    marginTop    : spacing(),
    padding      : '8px 32px',
    fontFamily   : typography.fontFamilyOpenSans,
    fontSize     : typography.pxToRem(16),
    letterSpacing: '0.66px',
  },
  twoSections: {
    display    : 'flex',
    '& section': {
      width : 528,
      margin: '51px 96px 98px 96px',
      '& h2': {
        marginBottom: spacing(0.5),
      },
      '& p': {
        marginBottom: spacing(2),
      },
      '& img': {
        width: '100%',
      },
      [breakpoints.down('sm')]: {
        marginLeft : spacing(4),
        marginRight: spacing(4),
      },
    },
  },
  greatScores: {
    justifyContent          : 'flex-end',
    backgroundColor         : palette.common.faintGrey,
    [breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
    },
  },
  unlockClassics: {
    justifyContent          : 'flex-start',
    [breakpoints.only('xs')]: {
      marginBottom: spacing(-3),
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
      fontSize   : typography.pxToRem(100),
      textShadow : `2px 2px 0px ${palette.common.white}`,
      fontWeight : 900,
      lineHeight : 0.65,
      marginRight: spacing(),
    },
    '& h6': {
      width                   : 140,
      [breakpoints.only('xs')]: {
        display: 'none',
      },
      [breakpoints.only('md')]: {
        display: 'none',
      },
      '& a': {
        textDecoration: 'none',
      },
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
    height         : 65,
    width          : 65,
    minWidth       : 65,
    borderRadius   : '50%',
    backgroundColor: palette.primary.main,
    color          : palette.common.white,
    fontFamily     : typography.fontFamilyAvenir,
    fontSize       : typography.pxToRem(50),
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
    '& $stepsImageContainer': {
      justifyContent          : 'flex-end',
      [breakpoints.down('sm')]: {
        justifyContent: 'flex-start',
      },
    },
  },
  testimonialsContainer: {
    display       : 'flex',
    alignItems    : 'center',
    justifyContent: 'center',
    flexDirection : 'column',
    boxSizing     : 'border-box',
    paddingTop    : 98,
    paddingBottom : 98,
    background    : `url(${images.supportedBy})`,
    backgroundSize: 'cover',
    '& h2'        : {
      color: palette.common.white,
    },
    [breakpoints.down('md')]: {
      paddingTop   : 47,
      paddingBottom: 47,
    },
  },
  testimonialsBlock: {
    display                 : 'flex',
    alignItems              : 'center',
    justifyContent          : 'center',
    flexWrap                : 'wrap',
    [breakpoints.down('md')]: {
      width: 400,
    },
  },
  testimonial: {
    position       : 'relative',
    marginTop      : 35,
    marginRight    : spacing(2),
    boxSizing      : 'border-box',
    padding        : spacing(3),
    height         : 184,
    width          : 393,
    borderRadius   : shape.borderRadius,
    backgroundColor: palette.common.white,
    boxShadow      : '0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.2)',
    '& svg'        : {
      position: 'absolute',
      top     : -20,
      left    : -5,
      width   : 90,
      height  : 30,
    },
    '&:not($testimonialHeader) > p': {
      fontSize: typography.pxToRem(13.82),
    },
    '&:last-child': {
      marginRight: 0,
    },
    [breakpoints.only('xs')]: {
      width : 288,
      height: 'auto',
    },
    [breakpoints.down('md')]: {
      marginRight: 0,
    },
  },
  testimonialHeader: {
    display       : 'flex',
    alignItems    : 'center',
    justifyContent: 'flex-start',
    marginBottom  : spacing(3),
    '& img'       : {
      height      : 52,
      width       : 52,
      borderRadius: 60,
      marginRight : spacing(2),
    },
    '& h2': {
      margin: 0,
    },
  },
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
});
