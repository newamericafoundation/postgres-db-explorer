module.exports = {

	entry: './scripts/site.js',

	output: {
		path: './public',
		filename: 'site.js'
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

	resolveLoader: [ 'node_modules' ]
	
}