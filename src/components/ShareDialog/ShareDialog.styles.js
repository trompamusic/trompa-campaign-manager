import { createStyles } from '@material-ui/styles';

export default ({ palette, spacing }) => createStyles({
  root: {
    background: `linear-gradient(0deg, ${palette.common.white} 60.9%, ${palette.common.faintGrey} 61%)`,
  },
  closeButton: {
    position: 'absolute',
    right   : spacing(),
    top     : spacing(),
  },
  content: {
    '& h2': {
      marginTop: spacing(3),
      maxWidth : 570,
    },
  },
  image: {
    display: 'block',
    width  : 430,
    height : 'auto',
    margin : '0 auto',
  },
  copyAndShareRow: {
    marginBottom: spacing(3),
    '& svg'     : {
      height         : 18,
      width          : 18,
      marginRight    : 30,
      lineHeight     : 18,
      '&:first-child': {
        marginLeft: spacing(3),
      },
      '&:last-child': {
        marginRight: 0,
      },
    },
  },
});
