import { createStyles } from '@material-ui/styles';

const backgroundGradient = (firstStop, secondStop) => `linear-gradient(105deg, rgba(255,255,255,1) ${firstStop}, rgba(255,140,2,1) ${secondStop}, rgba(244,87,49,1) 100%)`;

export default ({ spacing, palette, typography, shape, breakpoints }) => createStyles({
  root: {
    boxShadow   : '0 1px 6px 0px rgba(0,0,0,0.1)',
    display     : 'flex',
    position    : 'relative',
    alignItems  : 'center',
    width       : '100%',
    height      : 600,
    background  : backgroundGradient('65.9%', '66%'),
    '&$campaign': {
      height                  : 870,
      [breakpoints.only('sm')]: {
        height: 850,
      },
    },
    [breakpoints.only('xs')]: {
      height    : 250,
      background: backgroundGradient('45.9%', '46%'),
    },
    [breakpoints.only('sm')]: {
      height: 500,
    },
    [breakpoints.only('lg')]: {
      background: backgroundGradient('60.9%', '61%'),
    },
    [breakpoints.only('xl')]: {
      background: backgroundGradient('50.9%', '51%'),
    },
  },
  desktop: {
    zIndex    : 10,
    marginLeft: 92,
    width     : 475,
    '& h1'    : {
      lineHeight: 1.2,
    },
    '& h2': {
      lineHeight: 1.4,
    },
    '&$campaign': {
      marginTop: 0,
      '& h1'   : {
        lineHeight: 1.3,
      },
    },
    [breakpoints.only('xs')]: {
      display: 'none',
    },
    [breakpoints.only('sm')]: {
      marginLeft: 30,
      marginTop : 70,
      width     : 370,
      '& h2, p' : {
        width: '70%',
      },
      '&$campaign': {
        width    : '50%',
        marginTop: 0,
      },
    },
    [breakpoints.only('md')]: {
      marginLeft: 40,
    },
  },
  mobile: {
    margin              : spacing(2),
    marginTop           : spacing(5),
    marginBottom        : spacing(5),
    '& $prefixTitleHome': {
      width     : 250,
      lineHeight: 1.2,
    },
    '& $prefixTitleCampaign': {
      width     : 250,
      lineHeight: 1.2,
    },
    '& $logoIcon': {
      width : 22,
      height: 21,
    },
    '& h1': {
      lineHeight: 1.2,
    },
    '& h2': {
      marginBottom: spacing(2),
    },
    '& p': {
      marginBottom: spacing(2),
    },
    [breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  campaign       : {},
  prefixTitleHome: {
    display                 : 'flex',
    alignItems              : 'center',
    marginBottom            : spacing(0.5),
    [breakpoints.only('sm')]: {
      width     : 250,
      lineHeight: 1.2,
    },
    [breakpoints.only('xs')]: {
      '& h6': {
        lineHeight: 1.2,
      },
    },
  },
  prefixTitleCampaign: {
    display   : 'flex',
    alignItems: 'center',
    marginLeft: spacing(0.5),
    lineHeight: 1.5,
    minHeight : 19,
    '& a'     : {
      textDecoration: 'none',
      color         : palette.primary.main,
    },
    '& span': {
      fontSize    : typography.pxToRem(12),
      marginBottom: 0,
    },
    [breakpoints.down('sm')]: {
      width: 250,
    },
  },
  logoIcon: {
    width                   : 16,
    height                  : 15,
    marginRight             : spacing(0.7),
    [breakpoints.only('sm')]: {
      width : 22,
      height: 21,
    },
  },
  avatar: {
    display        : 'flex',
    justifyContent : 'center',
    alignItems     : 'center',
    width          : 18,
    height         : 18,
    borderRadius   : 60,
    backgroundColor: palette.common.faintGrey,
    marginRight    : spacing(0.5),
    '& img'        : {
      height: 14,
    },
  },
  compositionTitle: {
    backgroundColor: palette.common.faintGrey,
    borderRadius   : shape.borderRadius,
    padding        : '0 4px',
  },
  buttonHero: {
    padding      : '8px 32px',
    fontFamily   : typography.fontFamilyOpenSans,
    fontSize     : typography.pxToRem(16),
    letterSpacing: '0.66px',
  },
  image: {
    position                : 'absolute',
    width                   : '40%',
    height                  : 'auto',
    right                   : 92,
    [breakpoints.only('xs')]: {
      width : '70%',
      margin: '0 auto',
      left  : 0,
      right : 0,
    },
    [breakpoints.only('sm')]: {
      right: 30,
    },
    [breakpoints.only('md')]: {
      width: '45%',
      right: 40,
    },
    [breakpoints.only('lg')]: {
      width: '45%',
      right: 150,
    },
    [breakpoints.only('xl')]: {
      width: '36%',
      right: 500,
    },
  },
  score: {
    position       : 'absolute',
    right          : 350,
    boxSizing      : 'border-box',
    display        : 'flex',
    flexDirection  : 'column',
    justifyContent : 'center',
    alignItems     : 'center',
    width          : 290,
    height         : 'auto',
    boxShadow      : `0 0 10px 0 ${palette.shadow.transparentGrey}`,
    color          : palette.text.darkPurple,
    backgroundColor: palette.common.white,
    padding        : spacing(3),
    '& h3'         : {
      marginBottom: spacing(),
    },
    [breakpoints.only('xs')]: {
      width : 290,
      margin: '0 auto',
      left  : 0,
      top   : 25,
      right : 0,
    },
    [breakpoints.only('sm')]: {
      right: 70,
      width: 230,
    },
    [breakpoints.only('md')]: {
      right: 80,
    },
    [breakpoints.only('lg')]: {
      width : 320,
      height: 500,
    },
    [breakpoints.only('xl')]: {
      width : 320,
      height: 500,
      right : 500,
    },
  },
  toggleScoreModal: {
    color         : palette.primary.main,
    margin        : spacing(2, 0, 0),
    display       : 'flex',
    justifyContent: 'space-between',
  },
  progress: {
    // marginLeft: '75px',
  },
  scoreImage: {
    width                   : 240,
    [breakpoints.only('xs')]: {
      width: 240,
    },
    [breakpoints.only('sm')]: {
      width: 180,
    },
    [breakpoints.up('lg')]: {
      width: 290,
    },
    borderRadius: shape.borderRadius,
    border      : `3px solid ${palette.border.lightGrey}`,
  },
});

