import { createStyles } from '@material-ui/styles';

export default ({ spacing, typography, palette, breakpoints }) => createStyles({
  footer: {
    boxShadow: '0 2px 6px 0px rgba(0,0,0,0.2)',
    padding  : '48px 96px',
    '& h3'   : {
      marginBottom: spacing(3),
    },
    '& p': {
      maxWidth: 1100,
    },
    [breakpoints.only('xs')]: {
      padding: '36px 16px',
      '& h3' : {
        marginTop: spacing(2),
      },
    },
  },
  logo: {
    width                   : 138,
    marginBottom            : 48,
    [breakpoints.down('sm')]: {
      marginBottom: spacing(4),
    },
  },
  linksRow: {
    marginBottom: spacing(5),
  },
  linksLastColumn: {
    paddingLeft             : spacing(4),
    [breakpoints.down('sm')]: {
      paddingLeft: 0,
    },
  },
  linksBlock: {
    display      : 'flex',
    flexDirection: 'column',
    '& a'        : {
      fontFamily    : typography.fontFamilyOpenSans,
      fontSize      : typography.pxToRem(15.8),
      letterSpacing : 0.5,
      textDecoration: 'none',
      color         : palette.text.darkGrey,
      marginBottom  : spacing(2),
    },
  },
  euBlock: {
    [breakpoints.down('md')]: {
      justifyContent: 'flex-start',
      alignItems    : 'flex-start',
    },
  },
  euFlag: {
    width                   : 120,
    height                  : 80,
    marginRight             : spacing(3),
    [breakpoints.down('md')]: {
      alignItems  : 'flex-start',
      paddingTop  : spacing(),
      marginBottom: spacing(2),
    },
    [breakpoints.down('sm')]: {
      width : 240,
      height: 160,
    },
    [breakpoints.only('x')]: {
      paddingTop: 0,

    },
  },
});
