
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.export = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};