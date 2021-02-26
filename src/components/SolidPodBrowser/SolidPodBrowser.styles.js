import { createStyles } from '@material-ui/styles';

export default ({ palette, spacing }) => createStyles({
  root: {
    margin: spacing(5),
  },
  title: {
    display       : 'flex',
    justifyContent: 'space-between',
    paddingLeft   : spacing(),
  },
  closeButton: {
    position: 'absolute',
    right   : spacing(3),
    top     : spacing(3),
  },
  container: {
    display      : "flex", 
    flexDirection: "column",
    margin       : spacing(3), 
    height       : "80vh", 
  },
  iframeContainer: {
    flex          : 1,
    display       : "flex",
    justifyContent: "right",
    flexDirection : "column",
    margin        : spacing(), 
  },
  iframe: {
    width       : "100%", 
    height      : "100%",
    marginBottom: spacing(3),
  },
  bottomBar: {
    display       : 'flex',
    justifyContent: 'flex-end',
    alignItems    : 'center',
  },
  warningIcon: {
    color      : palette.common.errorRed,
    marginRight: spacing(),
  },
  warning: {
    marginRight: spacing(3),
  },
});

