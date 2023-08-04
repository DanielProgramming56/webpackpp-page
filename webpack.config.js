const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {

  entry: {

    index: './src/index.js',
    runner: './src/runner.js',
    menu: './src/runner.js'

  },
//   module: {
//       rules: [
//       {
//           test: /\.css$/i,
//           use: ['style-loader', 'css-loader']
//     }
//     ]
// },
//   plugins: [
//
//     new HtmlWebpackPlugin({
//
//       title: 'Output Management',
//
//     }),
//
//   ],
   output: {

    filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
 };
