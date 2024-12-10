import path from 'path'
import { WebpackConfiguration } from 'webpack-dev-server'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
// import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default (arg: WebpackConfiguration['mode']) => {
  const config: WebpackConfiguration = {
    mode: arg || 'development',
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
      static: './dist',
      host: 'localhost',
      port: 3000,
      historyApiFallback: true,
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /(node_modules)/,
          use: [{
            loader: 'ts-loader',
            options: {
              logLevel: 'info',
              configFile: path.resolve('.', 'tsconfig.json')
            }
          }],
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
      new HtmlWebpackPlugin({ template: './src/index.html' }),
    ],
    devtool: 'cheap-module-source-map',
  }

  return config
}
