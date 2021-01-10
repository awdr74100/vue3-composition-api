const path = require('path');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  devServer: {
    port: 9000,
    open: true,
  },
  configureWebpack: {
    plugins: [
      new StylelintPlugin({
        files: ['**/*.{vue,html,css,scss}'],
        ignorePath: path.resolve(__dirname, '.gitignore'),
      }),
    ],
  },
};
