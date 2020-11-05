import { createStyles } from '@material-ui/styles';

export default ({ spacing, typography, palette, breakpoints }) => createStyles({
  relative: {
    position: 'relative',
  },
  twoSections: {
    display                 : 'flex',
    boxShadow               : '0 1px 6px 0px rgba(0,0,0,0.1)',
    height                  : 600,
    [breakpoints.down('xs')]: {
      height: 'initial',
    },
    '& section': {
      width : 528,
      margin: '51px 96px 98px 96px',
      '& h2': {
        marginBottom: spacing(0.5),
      },
      '& p': {
        marginBottom: spacing(2),
      },
      [breakpoints.down('md')]: {
        margin: spacing(4, 2),
      },
      [breakpoints.down('sm')]: {
        margin: spacing(5, 2),
      },
    },
  },
  pieceInfo: {
    justifyContent          : 'flex-end',
    [breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
    },
  },
  pieceAuthor: {
    justifyContent : 'flex-start',
    backgroundColor: palette.common.faintGrey,
    '& section'    : {
      display       : 'flex',
      flexDirection : 'column',
      justifyContent: 'center',
      alignItems    : 'center',
    },
  },
  mahlerHeadshot: {
    borderRadius: '50%',
    width       : 115,
    height      : 115,
  },
  moreLink: {
    display       : 'flex',
    alignItems    : 'center',
    fontWeight    : 600,
    fontSize      : typography.pxToRem(14),
    fontFamily    : typography.fontFamilyOpenSans,
    color         : palette.primary.main,
    textDecoration: 'none',
    '& svg'       : {
      width      : 18,
      height     : 18,
      marginRight: spacing(),
    },
  },
});
