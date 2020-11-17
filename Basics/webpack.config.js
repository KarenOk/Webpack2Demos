const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "build"),
		publicPath: "build/"
	},
	module: {
		rules: [
			{
				use: "babel-loader",
				test: /\.js$/
			},
			{
				loader: ExtractTextPlugin.extract({
					loader: "css-loader"
				}),
				test: /\.css$/
			},
			{
				use: [{ loader: "url-loader", options: { limit: 40000 } }, "image-webpack-loader"],
				test: /\.(jpe?g|gif|png|svg)$/
			}
		]
	},
	plugins: [new ExtractTextPlugin("styles.css")]
};

module.exports = config;
