import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import palette from './palette';
import typography from './typography';
import images from './images';
import mixins from './mixins';
import overrides from './overrides';

const theme = createMuiTheme({
  palette,
  typography,
  images,
  mixins,
});

theme.overrides = overrides(theme);

export default theme;
