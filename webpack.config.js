const HtmlWebpackPlugin = require('html-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js'
	},
    devServer: {
        port: 8080,
    },
    experiments: {
        asyncWebAssembly: true,
    },
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.ttf$/,
				type: 'asset/resource'
			},
            {
                test: /\md$/,
                use: 'raw-loader'
            }
		]
	},
	plugins: [
        new MonacoWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
};