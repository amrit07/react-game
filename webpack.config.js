var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
module.exports = {
  entry:APP_DIR + '/index.jsx',
  output:{
    path:BUILD_DIR,
    filename: 'bundle.js'
  },
  module:{
    loaders:[
        {
          test : /\.jsx?/,
          include : APP_DIR,
          loader : 'babel-loader'
        },
        {
            test: /\.css$/,
            //loader: require.resolve('css-loader')
            use: [
                require.resolve('style-loader'),
                {
                    loader: require.resolve('css-loader'),
                    options: {
                        importLoaders: 1,
                    },
                },
            ],
        },
    ]
  }
};
