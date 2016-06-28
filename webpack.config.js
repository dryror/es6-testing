const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => (
  {
    entry: './index.js',
    output: {
      filename: 'bundle.[chunkhash].js',
      path: resolve(__dirname, 'build'),
      pathinfo: !env.prod,
    },
    context: resolve(__dirname, 'src'),
    devtool: env.prod ? 'source-map' : 'eval',
    bail: env.prod,
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel!eslint', exclude: /node_modules/ },
        { test: /\.css$/, loader: 'style!css' },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
    ],
  }
);
