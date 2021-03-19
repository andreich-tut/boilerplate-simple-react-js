const path = require('path');

module.exports = () => ({
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    hot: true,
    noInfo: true,
    inline: true,
    port: 3000,
    watchOptions: {
      ignored: /node_modules/,
    },
  },
});
