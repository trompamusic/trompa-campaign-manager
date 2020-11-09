import { createStyles } from '@material-ui/styles';

export default ({ spacing, palette, shape, breakpoints, typography }) => createStyles({
  root: {
  },
  uploadCard: {
    border        : `2px dashed ${palette.primary.main}`,
    marginBottom  : spacing(2),
    marginTop     : spacing(2),
    padding       : spacing(3),
    display       : 'flex',
    flexDirection : 'column',
    justifyContent: 'center',
    alignItems    : 'center',
  },
  uploadCardText: {
    marginTop   : spacing(0.3),
    marginBottom: spacing(0.3),
  },
  uploadCardButton: {
    marginTop: spacing(1),
  },
  icon: {
    marginRight: spacing(1),
  },
});
