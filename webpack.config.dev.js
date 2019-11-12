const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require('webpack');

module.exports = ({ mode } = { mode: "production" }) => {
    console.log(`mode is: ${mode}`);
    return {
            mode,
            entry: "./src/index.js",
            output: {
                publicPath: "/",
                path: path.resolve(__dirname, "build"),
                filename: "bundled.js"
            },
            module: {
                rules: [
                 {
                    test: /\.jpe?g|png$/,
                    exclude: /node_modules/,
                    loader: ["url-loader", "file-loader"]
                },
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        loader: "babel-loader"
                    }
                ]
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: "./public/index.html"
                }),
                new webpack.DefinePlugin({ 
                    'process.env': {
                        NODE_ENV: JSON.stringify('development'),
                        API_URL: JSON.stringify('https://at-metrics-api.herokuapp.com/api' )
                    }
                }),
            ]
        }
};