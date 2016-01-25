var path = require('path');
var webpack = require('webpack');
 
module.exports = {
 

    entry: {
        js :  path.resolve(__dirname, 'app/client.js') ,
        //css:  path.resolve(__dirname,'./node_modules/bootstrap/dist/css/bootstrap.min.css')
    },
   
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'app.js'
    },
    // read .js, .jsx by Babel
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
            //,
            //{ test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};