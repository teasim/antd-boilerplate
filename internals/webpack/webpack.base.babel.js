const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')

module.exports = options => ({
  entry: options.entry,
  output: Object.assign({
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/'
  }, options.output),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules|\.git/,
        use: {
          loader: 'babel-loader',
          options: options.babelQuery
        }
      },
      {
        test: /\.less$/,
        include: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer]
            }
          },
          {
            loader: 'less-loader',
            options: {
              noIeCompat: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true, importLoaders: 1 }
          },
          {
            loader: 'postcss-loader',
            options: { plugins: [autoprefixer] }
          }
        ]
      },
      {
        test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
        use: 'file-loader'
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false,
              pngquant: {
                quality: '65-90',
                speed: 4
              }
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      }
    ]
  },
  plugins: options.plugins.concat([
    new webpack.ProvidePlugin({
      fetch: 'exports-loader?self.fetch!whatwg-fetch'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.ContextReplacementPlugin(/\.\/locale$/, 'empty-module', false, /js$/),
    new webpack.NamedModulesPlugin()
  ]),
  resolve: {
    modules: [
      'client',
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.react.js'],
    mainFields: ['browser', 'jsnext:main', 'main']
  },
  node: { fs: 'empty' },
  devtool: options.devtool,
  target: 'web',
  performance: options.performance || {}
})
