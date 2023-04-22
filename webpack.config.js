const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const mode = "development"

module.exports = {
  entry: './src/index.tsx',
  mode,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: "/"
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader'
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css'
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist")
    },
    compress: true,
    port: 3000,
    historyApiFallback:true
  }
}