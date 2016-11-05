import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {
	entry: {
		game: path.resolve(__dirname, 'game/game.js')
	},
	target: 'web',
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
			{
				test: /\.json$/,
				loader: 'json',
				exclude: /node_modules/
			}
		]
	},
	output: {
		path: path.resolve(__dirname, '_dist/game/assets'),
		filename: '[name].js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: path.resolve(__dirname, 'index.html')
		})
	]
};

export default config;
