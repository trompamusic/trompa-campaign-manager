import { createStyles } from '@material-ui/styles';

export default ({ palette }) => createStyles({
  '@global': {
    ".paging-item .paging-dot": {
      width : 20,
      height: 20,
    },
    ".paging-item.active .paging-dot": {
      fill: palette.common.blue,
    },
    ".paging-item:not(.active) .paging-dot > circle": {
      fill       : 'none',
      stroke     : palette.border.grey,
      strokeWidth: '2px',
    },
    ".paging-item:not(.active) > button": {
      opacity: '1 !important',
    },
    ".paging-dot > circle": {
      r : '6px',
      cx: '10px',
      cy: '10px',
    },
  },
  slideButton: {
    backgroundColor: palette.common.white,
    boxShadow      : `0 4px 5px 0 rgba(0,0,0,0.14),
                      0 1px 10px 0 rgba(0,0,0,0.12),
                      0 2px 4px -1px rgba(0,0,0,0.2)`,
    '&:hover': {
      backgroundColor: palette.common.white,
    },
  },
});
