var path = require('path')
var webpack = require('webpack')

module.exports = {


  entry: {
    js :  path.resolve(__dirname, 'app/client.js') ,
    //css:  path.resolve(__dirname,'./react-datepicker/dist/react-datepicker.css')
  },

  output: {
    path: path.resolve(__dirname, 'static/js'),
    filename: 'app.js'
  },
  // read .js, .jsx by Babel
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      //,
      //{ test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  }
}
