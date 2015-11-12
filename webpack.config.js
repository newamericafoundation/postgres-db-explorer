var path = require('path'),
	webpack = require('webpack');

module.exports = {

	entry: [ 
		'./scripts/site.js',
		'webpack-hot-middleware/client'
	],

	output: {
		path: path.resolve('./public/'),
		filename: 'site.js',
		publicPath: 'http://localhost:1848/'
	},

	module: {
		loaders: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: [ 'es2015', 'react' ]
				}
			},
			{ 
				test: /\.scss$/, 
				loaders: [ "style", "css", "sass" ]
			}
		]
	},

	sassLoader: {
	    includePaths: [path.resolve(__dirname, "./node_modules")]
	},

	resolveLoader: [ 'node_modules' ],

	resolve: {
		alias: {
			'react': __dirname + '/node_modules/react',
			'react-dom': __dirname + '/node_modules/react-dom'
		}
	},

	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
	
}