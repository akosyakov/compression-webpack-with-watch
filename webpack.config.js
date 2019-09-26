// @ts-check
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'lib')
    },
    target: 'web',
    mode: 'development',
    plugins: [
        new CompressionPlugin({
            cache: true
        })
    ]
};