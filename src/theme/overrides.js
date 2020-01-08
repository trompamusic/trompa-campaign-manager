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
      fontFamily   : typography.fontFamily,
    },
    text: {
      fontWeight: 'bold',
      padding   : '6px 16px',
      '& svg'   : {
        width : 18,
        height: 18,
      },
    },
    containedPrimary: {
      background: 'linear-gradient(45.21deg, #0080E8 0%, #005AA3 100%)',
    },
  },
});

export default overrides;
