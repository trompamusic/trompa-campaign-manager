const overrides = ({ palette, typography }) => ({
  MuiAppBar: {
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
      color     : palette.text.blue,
      fontWeight: 'bold',
      padding   : '6px 16px',
      '& svg'   : {
        width : 18,
        height: 18,
      },
    },
    containedSecondary: {
      background: palette.primary.main,
    },
  },
  MuiDivider: {
    root: {
      backgroundColor: palette.common.black,
    },
  },
  MuiTypography: {
    paragraph: {
      marginBottom: 24,
    },
  },
});

export default overrides;
