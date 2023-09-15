const path = require('path');
const appDirectory = path.resolve(__dirname, './');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { presets } = require(`${appDirectory}/babel.config.js`);

// This is needed for webpack to compile JavaScript.
// Many OSS React Native packages are not compiled to ES5 before being
// published. If you depend on uncompiled packages they may cause webpack build
// errors. To fix this webpack can be configured to compile to the necessary
// `node_module`.
const babelLoaderConfiguration = {
  test: /\.(jsx|js)$/,
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(appDirectory, 'index.web.js'),
    path.resolve(appDirectory, 'src'),
    path.resolve(appDirectory, 'node_modules/react-native-uncompiled'),
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      // The 'metro-react-native-babel-preset' preset is recommended to match React Native's packager
      presets: presets,

      // Re-write paths to import only the modules needed by the app
      plugins: ['react-native-web'],
    },
  },
};

// This is needed for webpack to import static images in JavaScript files.
const imageLoaderConfiguration = {
  test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
  type: 'asset/resource',
};

const stylesConfiguration = {
  test: /\.css$/i,
  use: ['style-loader', 'css-loader', 'postcss-loader'],
};

const tsConfiguration = {
  test: /\.(tsx|ts|jsx|js|mjs)$/,
  exclude: /node_modules/,
  loader: 'ts-loader',
};

module.exports = {
  entry: [
    // load any web API polyfills
    path.resolve(appDirectory, 'index.web.ts'),
  ],

  // configures where the build ends up
  output: {
    filename: 'app-[hash].web.js',
    path: path.resolve(appDirectory, 'dist'),
  },

  devtool: 'source-map',
  // ...the rest of your config

  module: {
    rules: [ imageLoaderConfiguration,
             babelLoaderConfiguration,
             stylesConfiguration,
             tsConfiguration,
            ],     
  },

  resolve: {
    extensions: [
      '.web.tsx',
      '.web.ts',
      '.tsx',
      '.ts',
      '.web.jsx',  
      '.web.js',
      '.jsx',
      '.js',
    ], // read files in fillowing order
    alias: Object.assign({
      'react-native$': 'react-native-web',
    }),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: appDirectory + '/public/index.html',
    }),
  ],
  watch: true,
  cache: {
    type: 'filesystem',
  },
  mode: 'development'
};