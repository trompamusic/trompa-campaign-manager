import { createStyles } from '@material-ui/styles';

export default ({ spacing, palette, shape, breakpoints, typography }) => createStyles({
  item: {
    display      : 'flex',
    flexDirection: 'row',
    marginBottom : spacing(2),
    marginTop    : spacing(2),
    position     : 'relative',
    cursor       : 'pointer',
  },
  imgBox: {
    backgroundColor: palette.common.faintGrey,
    display        : 'flex',
    justifyContent : 'center',
    alignItems     : 'center',
    width          : 100,
  },
  img: {
    width          : '100%',
    height         : '100%',
    maxWidth       : 100,
    borderRadius   : 0,
    backgroundColor: palette.border.lightGrey,
    borderSize     : 3,
    color          : palette.shadow.transparentGrey,
    '& svg'        : {
      width : '2em',
      height: '2em',
    },
    '& img': {
      maxWidth : '90%',
      maxHeight: '90%',
    },
  },
  itemMain: {
    width  : '100%',
    height : '100%',
    padding: spacing(2),
  },
  itemHeader: {
    display       : 'flex',
    flexDirection : 'row',
    justifyContent: 'space-between',
  },
  itemButtonBox: {
    display      : 'flex',
    flexDirection: 'row',
    '& button'   : {
      borderRadius : 3,
      marginLeft   : spacing(2),
      paddingTop   : spacing(1),
      paddingBottom: spacing(1),
    },
    '& a': {
      textDecoration: 'none',
    },
  },
  itemDescription: {
    maxHeight   : 100,
    marginBottom: spacing(1),
  },
  iconButton: {
    borderRadius: spacing(1),
  },
  icon: {
    marginRight: spacing(1),
  },
  progressBar: {
    backgroundColor: palette.common.faintGrey,
    position       : 'absolute',
    bottom         : 0,
    width          : '100%',
    height         : 4,
  },
  progress: {
    backgroundColor: palette.primary.main,
  },
});
