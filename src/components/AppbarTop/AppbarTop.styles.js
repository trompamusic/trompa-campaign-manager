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
});
