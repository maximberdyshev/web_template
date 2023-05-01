import path from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  mode: 'development',

  entry: './src/index.tsx',

  output: {
    path: path.resolve('build'),
    filename: 'index.js',
    assetModuleFilename: '[name].[contenthash][ext]',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  devServer: {
    port: 3000,
    host: 'localhost',
    historyApiFallback: true,
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        use: ['ts-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpe?g|gif|ico)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    // new CopyWebpackPlugin({ patterns: [path.resolve('./src/assets/')], }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],

  devtool: 'cheap-module-source-map',
}
