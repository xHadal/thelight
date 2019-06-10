const Webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const config = require('./config');

const path = require('path');
const outputPath = path.resolve(__dirname, '../build');


module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  output: {
    chunkFilename: 'js/[name].chunk.js',
  },
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    port: 8080,
    stats: 'minimal',
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          compact: false,
          presets: [
            ['@babel/preset-env', { modules: false }],
            ['@babel/preset-react'],
          ],
        },
        include: [config.srcPath, config.modulesPath],
      },
      {
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader?sourceMap=true', 'sass-loader'],
      },
    ],
  },
});
