import { createStyles } from '@material-ui/styles';

export default ({ spacing, typography, palette, breakpoints }) => createStyles({
  relative: {
    position: 'relative',
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
      [breakpoints.only('sm')]: {
        marginLeft  : spacing(4),
        marginRight : spacing(4),
        marginBottom: spacing(4),
      },
      [breakpoints.only('xs')]: {
        marginLeft : spacing(2),
        marginRight: spacing(2),
      },
    },
  },
  greatScores: {
    paddingTop              : 2,
    paddingBottom           : 4,
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
      fontFamily : typography.fontFamilyOpenSans,
      color      : palette.primary.main,
      fontSize   : typography.pxToRem(100),
      textShadow : `2px 2px 0px ${palette.common.white}`,
      fontWeight : 800,
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
});
