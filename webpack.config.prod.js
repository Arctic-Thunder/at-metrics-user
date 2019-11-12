const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require('webpack');

module.exports = env => {
    console.log(`mode is: ${env.mode}`);
    console.log(`mode env is: ${env.NODE_ENV}`)
    console.log(`api_url env is: ${env.API_HOST}`)
    
    const mode = env.mode !== undefined ? env.mode : 'production'

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
                        'NODE_ENV': JSON.stringify('production'),
                        'API_HOST': JSON.stringify(env.API_HOST)
                    }
                }),
            ]
        }
};