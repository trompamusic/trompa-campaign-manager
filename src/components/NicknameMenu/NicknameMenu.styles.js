import { createStyles } from '@material-ui/styles';

export default ({ spacing, palette, typography, breakpoints }) => createStyles({
  root: {
    display   : 'flex',
    alignItems: 'center',
  },
  menu: {
    paddingBottom: 0,
  },
  userInfo: {
    display   : 'flex',
    alignItems: 'center',
    padding   : `${spacing()}px ${spacing(2)}px`,
  },
  dropdownIcon: {
    [breakpoints.down('sm')]: {
      display: 'none',
    },
    marginLeft: spacing(2),
    color     : palette.primary.main,
    fontSize  : typography.pxToRem(22),
  },
  avatar: {
    [breakpoints.down('sm')]: {
      height    : spacing(3.5),
      width     : spacing(3.5),
      marginLeft: -2,
    },
    height     : spacing(2.5),
    width      : spacing(2.5),
    marginRight: spacing(0.75),
    fontSize   : typography.pxToRem(14),
  },
  nickname: {
    [breakpoints.down('sm')]: {
      display: 'none',
    },
    fontSize     : typography.pxToRem(16),
    letterSpacing: 0.5,
  },
  nicknameMenu: {
    fontSize     : typography.pxToRem(16),
    letterSpacing: 0.5,
  },
  closeIcon: {
    '&:hover': {
      cursor: 'pointer',
    },
    marginLeft: 78,
    color     : palette.primary.main,
    fontSize  : typography.pxToRem(20),
  },
  logoutButton: {
    width         : '100%',
    justifyContent: 'flex-start',
  },
});
