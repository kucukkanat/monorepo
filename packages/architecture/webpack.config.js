const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: path.resolve(process.cwd(), 'index.js'),
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: 'bundle.js',
        libraryTarget: 'umd',
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    devServer: {
        
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(process.cwd(), "src/index.html")
    })]
};