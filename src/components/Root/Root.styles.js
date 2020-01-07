import { createStyles } from '@material-ui/styles';

export default ({ breakpoints }) => createStyles({
  container: {
    [breakpoints.up('xl')]: {
      width : 1860,
      margin: [0, 'auto'],
    },
    width: '100%',
  },
});
