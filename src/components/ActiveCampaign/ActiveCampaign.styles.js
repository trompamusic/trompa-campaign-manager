import { createStyles } from '@material-ui/styles';

export default ({ shape, palette, breakpoints }) => createStyles({
  author: {
    color: palette.text.blue,
  },
  section: {
    margin                  : 44,
    maxWidth                : 1440,
    [breakpoints.down('sm')]: {
      margin       : 16,
      marginBottom : 24,
      '& button, a': {
        width: '100%',
      },
    },
  },
  work: {
    display     : 'flex',
    minHeight   : 54,
    marginBottom: 14,
  },
  workLink: {
    '&:hover': {
      '& $workMusicIcon': {
        opacity: 0,
      },
      '& $workDownloadIcon': {
        opacity: 1,
      },
    },
    '& svg': {
      transition: 'opacity 0.2s ease',
      fill      : 'url(#FileMusicIconGradient)',
      height    : 36,
      width     : 30,
    },
    position      : 'relative',
    display       : 'flex',
    justifyContent: 'center',
    alignItems    : 'center',
    margin        : '8px 16px 8px 0',
    cursor        : 'pointer',
  },
  workMusicIcon: {
    opacity: 1,
  },
  workDownloadIcon: {
    opacity : 0,
    position: 'absolute',
  },
  actions: {
    '& a, button': {
      marginRight: 16,
    },
    marginBottom: 16,
  },
});
