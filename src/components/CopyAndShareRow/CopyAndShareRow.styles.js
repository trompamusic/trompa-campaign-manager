import { createStyles } from '@material-ui/styles';

export default ({ spacing, palette, breakpoints }) => createStyles({
  copyAndShareRow: {
    display     : 'flex',
    alignItems  : 'center',
    marginBottom: spacing(3),
    '& a'       : {
      color         : palette.common.black,
      marginRight   : 30,
      '&:last-child': {
        marginRight: 0,
      },
    },
    '& svg': {
      height    : 18,
      width     : 18,
      lineHeight: 18,
    },
  },
  sharingIcons: {
    paddingTop              : spacing(0.3),
    [breakpoints.only('xs')]: {
      marginTop: spacing(1.5),
      '& a'    : {
        marginRight: spacing(2),
      },
    },
  },
});
