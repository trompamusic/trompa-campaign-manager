import { createStyles } from '@material-ui/styles';

export default () => createStyles({
  row: {
    display       : 'flex',
    alignItems    : 'center',
    justifyContent: 'center',
  },
  jumbotron: {
    position  : 'relative',
    width     : 1440,
    height    : 600,
    display   : 'flex',
    alignItems: 'center',
    background: 'linear-gradient(105deg, rgba(255,255,255,1) 65.9%, rgba(255,140,2,1) 66%, rgba(244,87,49,1) 100%)',
  },
  jumbotronContent: {
    marginLeft     : 92,
    backgroundColor: 'purple',
    width          : 200,
    height         : 50,
  },
  jumbotronImage: {
    position: 'absolute',
    width   : '50%',
    height  : 'auto',
    right   : 92,
  },
});
