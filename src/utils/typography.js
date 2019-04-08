import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.6,
  headerLineHeight: 1.25,
  headerFontFamily: ['Bitter', 'serif'],
  bodyFontFamily: ['Rubik', 'sans-serif'],
  bodyColor: '#241c15',
  includeNormalize: false,
  blockMarginBottom: `1rem`,
  overrideStyles: () => ({
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    },
    body: {
      'line-height': 1.6,
    },
  }),
});

export default typography;
