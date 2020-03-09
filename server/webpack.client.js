const path = require('path');

module.exports = {
  
    //Server root file
    entry: './src/client/client.js',


    output : {
        filename :'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    //tell webpack to run bable on every file it runs
    module: {
        rules : [
            {
                test: /\.js?$/,
                loader:'babel-loader',
                exclude: /node_modules/,
                options : {
                    presets : [
                        'react',
                        'stage-0',
                        ['env', { targets : { browsers: ['last 2 versions']}}]

                    ]

                    
                }
            }
        ]
    }
}