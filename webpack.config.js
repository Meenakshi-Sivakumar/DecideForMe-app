// entry point -> output bundle point.
const path = require('path');

//for babel i did install babel-core and babel-loader.
//module is a node thing. 
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
      ],
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname,'public')
    }
};
//use gets multiple loaders.order important.//+ node-sass//and babel-core