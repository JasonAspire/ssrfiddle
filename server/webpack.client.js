const path = require('path');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const config= {
  
    //Server root file
    entry: './src/client/client.js',


    output : {
        filename :'bundle.js',
        path: path.resolve(__dirname, 'public')
    }

}

module.exports = merger(baseConfig, config)
