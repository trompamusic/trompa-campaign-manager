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
  indicatesRequired: {
    fontSize      : typography.pxToRem(11),
    display       : 'flex',
    justifyContent: 'flex-end',
    marginBottom  : spacing(2),
  },
  asterisk: {
    color: palette.common.errorRed,
  },
  mcFieldGroup: {
    '& label': {
      fontSize: typography.pxToRem(14),
    },
    '& input': {
      '&:focus': {
        border: `1px solid ${palette.primary.main}`,
      },
      borderRadius: 3,
      border      : `1px solid ${palette.common.borderGrey}`,
      marginTop   : spacing(0.5),
      marginBottom: spacing(1.5),
      padding     : spacing(),
    },
    display       : 'flex',
    flexDirection : 'column',
    justifyContent: 'flex-start',
  },
  submit: {
    '& input': {
      borderRadius   : 3,
      border         : 'none',
      color          : palette.common.white,
      backgroundColor: palette.primary.main,
      padding        : `${spacing()}px ${spacing(3.5)}px`,
      margin         : 0,
      marginTop      : spacing(2),
    },
  },
});
