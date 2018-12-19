const path                  = require("path");

const MiniCssExtractPlugin  = require("mini-css-extract-plugin");
const CopyWebpackPlugin     = require('copy-webpack-plugin');
const webpack               = require('webpack');

const projectConf = require('./project.config');
const inputDir = path.join(process.cwd(), projectConf.inputLibDir);
const outputDir = path.join(process.cwd(), projectConf.outputLibDir);

module.exports = env => ({
    entry: [
        'whatwg-fetch',
        `${inputDir}/index.js`
    ],
    output: {
        path: outputDir,
        filename: `${projectConf.libBundleName}.js`,
        umdNamedDefine: true,
        library: 'Standings',
        libraryTarget: 'umd',
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
                    'style-loader',
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
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CopyWebpackPlugin([
            { from: `${inputDir}/README.md`, to: `${outputDir}/README.md` },
            { from: `${inputDir}/LICENSE.md`, to: `${outputDir}/LICENSE.md` },
            { from: `${inputDir}/package-lib.json`, to: `${outputDir}/package.json`},
        ])
    ],
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    }

});
