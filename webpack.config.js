const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: {
    app: './apps/psap-angular/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'apps/psap-express/static')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].theme.css",
      chunkFilename: "[id].css" // TODO: vendor
    })
  ],
  resolve: {
    modules: [
      'node_modules',
      'apps'
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'apps/psap-express')
        ],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
        }
      },
      {
        test: /\.ico$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].html',
              outputPath: 'templates/'
            }
          },
          'pug-html-loader'
        ]
      }
    ]
  }
}
