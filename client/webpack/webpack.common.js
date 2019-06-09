const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./config');

const basename = process.env.BASENAME || '/';


module.exports = {
  entry: [
    path.join(config.srcPath, 'index.jsx'),
    path.join(config.srcPath, 'index.scss'),
  ],
  output: {
    path: config.buildPath,
    publicPath: basename,
    filename: 'js/[name].js',
  },
  resolve: {
    alias: {
      '@': config.srcPath,
    },
    extensions: ['.js', '.jsx', '.json'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: config.assetsPath, to: 'assets' },
    ]),
    new HtmlWebpackPlugin({
      template: `${config.srcPath}/index.html`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
        include: config.srcPath,
        exclude: config.modulesPath,
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          compact: false,
          presets: [
            ['@babel/preset-env', { modules: false }],
            ['@babel/preset-react'],
          ],
          plugins: [
            'react-hot-loader/babel',
          ],
        },
        include: [config.srcPath, config.modulesPath],
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      },
    ],
  },
};
