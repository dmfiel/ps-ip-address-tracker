const path = require('path');
module.exports = {
  entry: './src/main.ts',
  module: {
    rules: [{ test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ }]
  },
  resolve: { extensions: ['.ts', '.js'] },
  output: { filename: 'bundle.js', path: path.resolve(__dirname, 'dist') },
  devServer: {
    static: {
      directory: path.join(__dirname, 'src')
    }
  }
};
