const fontFamily         = '\'Roboto\', sans-serif';
const fontFamilyOpenSans = '\'Open Sans\', sans-serif';

export default {
  h1: {
    color       : '#191847',
    fontWeight  : 900,
    fontSize    : '52.18px',
    marginBottom: 16,
    fontFamily  : fontFamilyOpenSans,
    lineHeight  : 1,
  },
  h2: {
    color       : '#1A1951',
    fontWeight  : 900,
    fontSize    : '26.09px',
    marginBottom: 8,
    fontFamily  : fontFamilyOpenSans,
    lineHeight  : 1.2,
  },
  h3: {
    color     : '#3A3A3A',
    fontWeight: 600,
    fontSize  : '21.50px',
  },
  subtitle1: {
    fontWeight: 600,
  },
  subtitle2: {
    color        : 'rgba(0,0,0,0.87)',
    fontFamily   : fontFamilyOpenSans,
    fontSize     : 11.74,
    fontWeight   : 600,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  body1: {
    maxWidth  : '655px',
    color     : '#333333',
    fontSize  : '15.8px',
    fontFamily: fontFamilyOpenSans,
  },
  caption: {
    display     : 'block',
    color       : '#4C4C4C',
    fontSize    : '15.71px',
    marginBottom: 3,
  },
  useNextVariants: true,
  fontFamily,
  fontFamilyOpenSans,
};
