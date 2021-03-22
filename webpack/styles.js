const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (isDev) => {
  const mainCssLoader = isDev ? 'style-loader' : { loader: MiniCssExtractPlugin.loader };

  const vendorStyles = (mainCssLoader) => ({
    test: /\.css$/,
    include: [
      /node_modules/,
    ],
    use: [
      mainCssLoader,
      'css-loader',
    ],
  });

  const appStyles = (mainCssLoader, isDev) => ({
    test: /\.css$/,
    exclude: [
      /node_modules/,
    ],
    use: [
      mainCssLoader,
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          modules: {
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64]',
          },
          importLoaders: 1,
        },
      },
      {
        loader: 'postcss-loader'
      },
    ],
  });

  return [
    vendorStyles(mainCssLoader, isDev),
    appStyles(mainCssLoader, isDev),
  ];
};
