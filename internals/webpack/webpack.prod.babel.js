const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OfflinePlugin = require('offline-plugin')

process.traceDeprecation = true
process.noDeprecation = true

module.exports = require('./webpack.base.babel')({
  entry: [
    path.join(process.cwd(), 'client/app/index.js')
  ],

  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
      async: true
    }),

    new HtmlWebpackPlugin({
      template: 'client/app/templates/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),

    new OfflinePlugin({
      relativePaths: false,
      publicPath: '/',
      excludes: ['.htaccess'],
      caches: {
        main: [':rest:'],
        additional: ['*.chunk.js']
      },
      safeToUseOptionalCaches: true,
      AppCache: false
    })
  ],

  performance: {
    assetFilter: assetFilename => !(/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename))
  }
})
