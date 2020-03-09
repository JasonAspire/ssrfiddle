const path = require('path');

module.exports = {
    //Inform webpack we're build a bundle for nodeJS
    target : 'node',

    //Server root file
    entry: './src/index.js',


    output : {
        filename :'bundle.js',
        path: path.resolve(__dirname, 'build')
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