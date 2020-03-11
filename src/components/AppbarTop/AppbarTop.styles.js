import { createStyles } from '@material-ui/styles';

export default ({ typography, palette }) => createStyles({
  dense: {
    height        : 56,
    color         : palette.text.blue,
    justifyContent: 'space-between',
    alignItems    : 'center',
    fontFamily    : typography.fontFamilyOpenSans,
    '& img'       : {
      transform: 'translateY(10%)',
    },
  },
  logo: {
    width: 138,
  },
  mobile: {
    position      : 'relative',
    justifyContent: 'center',
  },
  hamburger: {
    position : 'absolute',
    left     : 16,
    marginTop: 2,
    '& svg'  : {
      color: palette.common.black,
    },
  },
});
