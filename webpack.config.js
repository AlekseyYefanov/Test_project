const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ReactLoadablePlugin } = require('react-loadable/webpack');

module.exports = {
  entry: {
    main: './src/index.js',
    server: './src/server.js', // Додали точку входу для серверного коду
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ReactLoadablePlugin({
      filename: './dist/react-loadable.json',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    historyApiFallback: true,
  },
  target: 'node', // Додали цей рядок для серверного коду
  node: {
    __dirname: false, // Додали цей рядок для серверного коду
  },
};
