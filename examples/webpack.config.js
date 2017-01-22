var path = require('path');

var projectRoot = path.resolve(__dirname, '..');
var exampleRoot = path.resolve(projectRoot, 'examples');
var buildPath = path.resolve(exampleRoot, 'build');

console.log(exampleRoot);

module.exports = {
  entry: {
    app: [path.resolve(exampleRoot, 'app.js')]
  },
  output: {
    path: buildPath,
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.css$/,
          /\.json$/,
          /\.svg$/
        ],
        loader: 'url',
        query: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      // Process JS with Babel.
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css?importLoaders=1'
        // Note: this won't work without `new ExtractTextPlugin()` in `plugins`.
      },
      // JSON is not enabled by default in Webpack but both Node and Browserify
      // allow it implicitly so we also enable it.
      {
        test: /\.json$/,
        loader: 'json'
      },
      // "file" loader for svg
      {
        test: /\.svg$/,
        loader: 'file',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
    ]
  }
};