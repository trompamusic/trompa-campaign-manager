import { createStyles } from '@material-ui/styles';

export default ({ palette, spacing, breakpoints }) => createStyles({
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
});
