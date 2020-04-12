const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(process.cwd(), 'index.js'),
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: 'bundle.js',
        libraryTarget: 'umd',
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
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
};