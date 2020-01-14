import { createStyles } from '@material-ui/styles';

export default () => createStyles({
  section: {
    margin: 44,
  },
  creativeWork: {
    display: 'flex',
    height : 54,
  },
  fileMusicIcon: {
    display       : 'flex',
    justifyContent: 'center',
    alignItems    : 'center',
    margin        : '8px 16px 8px 0',
    '& svg'       : {
      fill  : 'url(#FileMusicIconGradient)',
      width : 30,
      height: 36,
    },
  },
});
