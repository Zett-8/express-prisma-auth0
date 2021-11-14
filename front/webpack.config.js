const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
  },

  entry: './src/index.tsx',

  output: {
    filename: '[name]-[hash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext]',
  },

  devServer: {
    historyApiFallback: true,
    hot: true,
  },

  devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',

  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: '/node_modules/',
        use: 'ts-loader',
      },
    ],
  },

  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial',
    },
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
}
