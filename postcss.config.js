module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-mixins'),
    require('autoprefixer'),
    require('postcss-nested'),
    require('postcss-nested-ancestors'),
    require('postcss-preset-env'),
  ]
}
