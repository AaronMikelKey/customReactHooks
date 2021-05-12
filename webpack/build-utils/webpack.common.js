const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// If you want a static html page or a template for a one-page react app
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
 
module.exports = {
  entry: [
    'react-hot-loader/patch',
    path.resolve(__dirname, '..', './index.js')
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
				//sometimes necessary because of dependencies causing errors
        exclude: /node_modules/, 
        use: ['babel-loader'],
      },
      {
        test: /\.s?[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
						// Loads images
            loader: 'file-loader'
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
				// Loads fonts
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
		// Sometimes jsx files cause issues
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '' // css/styles.css
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '',
      //favicon: './src/images/favicon.ico',
      template: path.resolve(__dirname, ''), ///src/index.html
    }),
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
  },
};