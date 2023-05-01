import path from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  entry: {
    client: './src/index.tsx',
  },

  mode: 'development',

  output: {
    path: path.resolve('build'),
    filename: 'index.js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  devServer: {
    static: './public',
    compress: true,
    port: 3000,
    host: "localhost",
    historyApiFallback: true,
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        use: [
          'ts-loader'
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [
          'file-loader'
        ],
      },
    ],
  },

  plugins: [
    // new CopyWebpackPlugin({ patterns: [path.resolve('./public/index.html')], }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],

  devtool: 'cheap-module-source-map',
}
