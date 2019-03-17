const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');

const srcPath = path.resolve(__dirname, 'src');
const outputPath = path.resolve(__dirname, 'dist');
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const modulesPath = path.resolve(__dirname, 'node_modules');

const api = process.env.API || 'http://localhost:8079/api/';
const basename = process.env.BASENAME || '/';

module.exports = {
  mode,
  entry: [
    path.join(srcPath, 'index.css'),
    path.join(srcPath, 'index.jsx'),
  ],
  output: {
    globalObject: 'this',
    publicPath: basename,
    path: outputPath,
    filename: 'bundle.[hash].js',
  },
  resolve: {
    alias: { '@': srcPath },
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      ...(mode === 'development' ? [
        {
          test: /\.(js|jsx)$/,
          enforce: 'pre',
          loader: 'eslint-loader',
          options: {
            emitWarning: true,
          },
          include: srcPath,
          exclude: modulesPath,
        },
      ] : []),
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
            'styled-components',
          ],
        },
        include: [srcPath, modulesPath],
      },
      {
        test: /\.css/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
            },
          },
        ],
        include: [srcPath, modulesPath],
      },
      {
        test: /\.(bin|gif|jpg|png|svg|ttf|woff|woff2|mp3|ogg)$/,
        loader: 'file-loader',
        include: srcPath,
        exclude: modulesPath,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __API__: JSON.stringify(api),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    },
    contentBase: outputPath,
    watchContentBase: true,
    port: 8080,
    stats: 'minimal',
  },
};
