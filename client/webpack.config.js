const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV !== 'prod';

module.exports = {
	devtool: 'inline-source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: isDevelopment ? '[name].css' : 'css/[name].[hash].css',
			chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
			publicPath: isDevelopment ? '/' : '',
		}),
	],
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: isDevelopment ? '[name].js' : '[name].[hash].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					isDevelopment ? 'style-loader' :MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: isDevelopment
									? '__[local]__[hash:base64:5]'
									: '[hash:base64]'
							},
							sourceMap: isDevelopment,
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: isDevelopment
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.scss']
	},
	devServer: {
		historyApiFallback: true
	}
};
