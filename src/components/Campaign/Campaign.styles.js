import { createStyles } from '@material-ui/styles';

export default ({ shape, palette }) => createStyles({
  section: {
    margin  : 44,
    maxWidth: 1440,
  },
  work: {
    display     : 'flex',
    minHeight   : 54,
    marginBottom: 14,
  },
  fileMusicIcon: {
    display       : 'flex',
    justifyContent: 'center',
    alignItems    : 'center',
    margin        : '8px 16px 8px 0',
    '& svg'       : {
      fill  : 'url(#FileMusicIconGradient)',
      height: 36,
      width : 30,
    },
  },
  actions: {
    '& button': {
      marginRight: 16,
    },
    marginBottom: 16,
  },
  shareCampaignInput: {
    padding: '8px 12px',
  },
  shareCampaignAdornedEnd: {
    color       : palette.text.blue,
    borderRadius: shape.borderRadius,
    fontSize    : '13.75px',
    fontWeight  : 'bold',
  },
  shareCampaignInputMarginDense: {
    color     : palette.text.darkGrey,
    fontWeight: 'normal',
  },
  '@media (max-width: 700px)': {
    section: {
      margin      : 16,
      marginBottom: 24,
      '& button'  : {
        width: '100%',
      },
    },
    shareCampaignInputMarginDense: {
      padding: 8,
    },
    textField: {
      width: '100%',
    },
  },
});
