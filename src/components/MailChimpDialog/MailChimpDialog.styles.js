import { createStyles } from '@material-ui/styles';

export default ({ palette, spacing, typography, breakpoints }) => createStyles({
  root: {
    width        : 500,
    paddingBottom: spacing(3),
    '& form'     : {
      padding   : '0 !important',
      fontFamily: typography.fontFamilyOpenSans,
    },
    '& input': {
      fontFamily: 'inherit',
      fontSize  : typography.pxToRem(14),
      '&:focus' : {
        outline: 'none',
      },
    },
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
