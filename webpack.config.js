'use strict'
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  mode: 'production',
  watchOptions: {
    aggregateTimeout: 300,
    poll: 100,
  },
  output: {
    path: path.resolve('./build'),
    filename: 'scripts.js'
  },
  entry: [
    './src/js/main.js'
  ],
  stats: {
    assets: true,
    builtAt: true,
    warnings: true
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, 
        {
          loader:  MiniCssExtractPlugin.loader
        },
        {
          loader: 'css-loader',
          options: {
            url: false,
            minimize: true
          } // translates CSS into CommonJS modules
        },
        {
          loader: 'sass-loader' // compiles Sass to CSS
        }
      ]
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env']
            }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.min.css',
    })
  ]
}
