const overrides = ({ palette, typography, spacing, breakpoints, shape }) => ({
  MuiAppBar: {
    root: {
      zIndex: 50,
    },
    colorPrimary: {
      color          : palette.text.darkGrey,
      backgroundColor: palette.common.faintWhite,
    },
  },
  MuiButton: {
    root: {
      textTransform: 'none',
      fontFamily   : typography.fontFamilyOpenSans,
    },
    text: {
      color     : palette.primary.main,
      fontWeight: 600,
      padding   : '6px 16px',
      '& svg'   : {
        width : 18,
        height: 18,
      },
      marginRight: spacing(1.5),
    },
    containedPrimary: {
      background: palette.primary.main,
    },
  },
  MuiDivider: {
    root: {
      backgroundColor: palette.common.black,
    },
  },
  MuiFilledInput: {
    root: {
      borderRadius: shape.borderRadius,
    },
  },
  MuiTypography: {
    h1: {
      [breakpoints.down('sm')]: {
        fontSize: typography.pxToRem(30),
      },
    },
    h2: {
      [breakpoints.down('sm')]: {
        fontSize: typography.pxToRem(21),
      },
    },
    paragraph: {
      marginBottom: 24,
    },
  },
});

export default overrides;
