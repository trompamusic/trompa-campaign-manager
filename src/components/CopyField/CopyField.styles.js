import { createStyles } from '@material-ui/styles';

export default ({ spacing, palette, shape, breakpoints, typography }) => createStyles({
  root: {
    marginRight: spacing(4),
  },
  copyField: {
    [breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  copyFieldInput: {
    height : 20,
    padding: '8px 12px',
  },
  copyFieldAdornedEnd: {
    color       : palette.primary.main,
    borderRadius: shape.borderRadius,
    fontFamily  : typography.fontFamilyOpenSans,
    fontSize    : typography.pxToRem(14),
  },
  copyFieldInputMarginDense: {
    color                   : palette.text.darkGrey,
    fontWeight              : 'normal',
    [breakpoints.down('sm')]: {
      padding: 8,
    },
  },
  copyText: {
    cursor   : 'pointer',
    textAlign: 'center',
    minWidth : 50,
  },
});
