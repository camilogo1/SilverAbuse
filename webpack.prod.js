 const webpack = require('webpack');
 const path = require('path');
 const merge = require('webpack-merge');
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
     //devtool: 'source-map',
     plugins: [
         new UglifyJSPlugin({
             sourceMap: true
         }),
         new webpack.DefinePlugin({
             'process.env': {
                 'NODE_ENV': JSON.stringify('production')
             }
         }),
         new webpack.HashedModuleIdsPlugin(),
         //For proper chunking, CommonsChunkPlugin
         //must be explicitly instatiated twice,
         // once with a non-existant module name.
         new webpack.optimize.CommonsChunkPlugin({
             names: ['vendor'],
             minChunks: Infinity
         }),
         new webpack.optimize.CommonsChunkPlugin({
             names: ['manifest'],
             minChunks: Infinity
         })
     ],
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
 });