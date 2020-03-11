const path = require('path');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const webpackNodeExternals = require('webpack-node-externals')
const config = {
    //Inform webpack we're build a bundle for nodeJS
    target : 'node',

    //Server root file
    entry: './src/index.js',


    output : {
        filename :'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
   externals:[webpackNodeExternals()]
   
}

module.exports = merge(baseConfig, config)