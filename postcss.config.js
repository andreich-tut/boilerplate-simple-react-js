const path = require('path');

module.exports = {
  plugins: [
    [
      'postcss-prepend-imports',
      {
        path: path.resolve(__dirname, 'src/styles/common'),
        files: ['selectors.css', 'media.css']
      }
    ],
    'postcss-import',
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 4,
        features: {
          'custom-properties': true,
          'nesting-rules': true,
        },
      },
    ],
    'cssnano',
    'postcss-custom-media',
    'postcss-custom-properties',
    'postcss-nested',
    'postcss-nested-ancestors',
    'postcss-custom-selectors'
  ]
}
