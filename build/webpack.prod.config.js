const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

const projectConf = require('./project.config');

module.exports = env => ({
    entry: [
        'whatwg-fetch',
        path.join(process.cwd(), `${projectConf.inputProdDir}/Main.jsx`)
    ],
    output: {
        path: path.join(process.cwd(), projectConf.outputProdDir),
        filename: `${projectConf.prodBundleName}.js`
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    env.production !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            API_URL: JSON.stringify(env.API_URL || projectConf.apiURL),
            API_KEY: JSON.stringify(process.env.API_KEY || projectConf.apiKey)
        }),
        new HtmlWebpackPlugin({
            template: path.join(process.cwd(), "/src/dev/index.html")
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    resolve: {
        extensions: [".js", ".jsx", ".json"],
        alias: {
            '@lib':  path.join(process.cwd(), "/lib")
        }
    },
    devServer: {
        contentBase: path.join(process.cwd(), "/dev"),
        port: projectConf.portDEV,
        stats: "minimal"
    },

    devtool: projectConf.sourcemaps

});
