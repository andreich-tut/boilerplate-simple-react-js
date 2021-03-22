module.exports = () => {
  return [
    {
      enforce: 'pre',
      test: /(\.jsx?|\.tsx?)$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
    },
    {
      test: /(\.jsx?|\.tsx?)$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    },
  ];
};
