import { createStyles } from '@material-ui/styles';

export default ({ spacing, typography, palette, breakpoints }) => createStyles({
  relative: {
    position: 'relative',
  },
  twoSections: {
    display                 : 'flex',
    height                  : 600,
    maxHeight               : 600,
    [breakpoints.only('sm')]: {
      height: 500,
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
        marginTop   : spacing(4),
        marginLeft  : spacing(2),
        marginRight : spacing(2),
        marginBottom: spacing(4),
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
  pieceInfo: {
    justifyContent          : 'flex-end',
    [breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
    },
  },
  pieceAuthor: {
    justifyContent          : 'flex-start',
    backgroundColor         : palette.common.faintGrey,
    [breakpoints.only('xs')]: {
      marginBottom: spacing(-3),
    },
    '& section': {
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
});
