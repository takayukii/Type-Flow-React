module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: './dist/bundle.js'
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {test: /\.(js|jsx)?$/, loader: 'babel', exclude: /node_modules/,}
    ]
  }
};