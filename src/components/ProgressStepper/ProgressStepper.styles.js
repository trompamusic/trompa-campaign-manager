import { createStyles } from '@material-ui/styles';

export default () => createStyles({
  root: {
    overflow: 'auto',
  },
  alternativeLabel: {
    top  : 10,
    left : 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  line: {
    borderColor   : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius  : 1,
  },
});
