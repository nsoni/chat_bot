const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const rules = [
  {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      'style-loader',
      // Translates CSS into CommonJS
      'css-loader',
      // Compiles Sass to CSS
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          sassOptions: {
            outputStyle: 'compressed',
          },
          
        },
      },
    ],
  },
  {
    test: /\.(png|jpg|gif)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          name: 'assets/[contenthash].[ext]',
          limit: 5000
        }
      }
    ]
  },
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ['babel-loader']
  }
]
module.exports = {
  target: 'web',
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname + 'build'),
    publicPath: '/',
    filename: '[name].[chunkhash].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/static/index.html'})
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: {
      name: entrypoint => `runtimechunk~${entrypoint.name}`
    }
  },
  devServer: {
    contentBase: './',
    historyApiFallback: true,
    port: 6862
  },
  module: {rules},
};
