/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @flow
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'root.js'),
  output: {
    path: path.join(__dirname, 'output'),
    filename: '[name].js'
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    alias: {
    },
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'src/example'),
      './node_modules'
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'src')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          plugins: [
            ['minify-replace', {
              'replacements': [{
                'identifierName': '__DEV__',
                'replacement': {
                  'type': 'booleanLiteral',
                  'value': true
                }
              }]
            }],
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-proposal-optional-catch-binding',
            '@babel/plugin-proposal-optional-chaining',
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-transform-flow-strip-types',
            ['babel-plugin-fbt', {
              fbtEnumManifest: require('./.enum_manifest.json')
            }],
            'babel-plugin-fbt-runtime',
          ]
        }
      },
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(bmp|gif|jpg|jpeg|png|psd|svg|webp|ttf|ktx|wav|ogg|mp4|webm)$/,
        loaders: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'root.html')
    })
  ]
};
