const overrides = ({ palette }) => ({
  MuiAppBar: {
    colorPrimary: {
      color          : palette.text.darkGrey,
      backgroundColor: palette.common.faintWhite,
    },
  },
  MuiButton: {
    root: {
      textTransform: 'none',
      padding      : '10px 25px',
      minWidth     : 132,
    },
  },
});

export default overrides;
