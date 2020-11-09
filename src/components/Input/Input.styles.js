import { createStyles } from '@material-ui/styles';

export default ({ spacing }) => createStyles({
  root: {
    '& .MuiTextField-root': {
      borderRadius: '25px',
    },
    marginBottom: spacing(2.5),
  },
});
