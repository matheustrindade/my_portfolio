const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devServer: {
		port: 9000,
		historyApiFallback: true,
	},
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, '/dist'),
		filename: 'bundle.js',
		//set de default public path
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
				use: ['file-loader']
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				use: 'url-loader?limit=100000'
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html' }),
	],
}