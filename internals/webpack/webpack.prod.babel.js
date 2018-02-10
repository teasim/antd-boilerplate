const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')
const OfflinePlugin = require('offline-plugin')
// const pkg = require(join(process.cwd(), 'package.json'))

process.traceDeprecation = true
process.noDeprecation = true

const cdn = {
  React: 'https://unpkg.com/react@16.2.0/umd/react.production.min.js',
  ReactDOM: 'https://unpkg.com/react-dom@16.2.0/umd/react-dom.production.min.js',
  ReactRouter: 'https://unpkg.com/react-router@4.2.0/umd/react-router.min.js',
  ReactRouterDOM: 'https://unpkg.com/react-router-dom@4.2.2/umd/react-router-dom.min.js',
  ReactRedux: 'https://unpkg.com/react-redux@5.0.6/dist/react-redux.min.js',
  Redux: 'https://unpkg.com/redux@3.7.2/dist/redux.min.js',
  ReduxSaga: 'https://unpkg.com/redux-saga@0.16.0/dist/redux-saga.min.js',
  PropTypes: 'https://unpkg.com/prop-types@15.6.0/prop-types.min.js',
  Moment: 'https://unpkg.com/moment@2.20.1/min/moment.min.js',
  Immutable: 'https://unpkg.com/immutable@3.8.2/dist/immutable.min.js',
  Teasim: 'https://unpkg.com/teasim@4.1.0/umd/teasim.min.js'
}

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
      name: 'commons',
      children: true,
      minChunks: 2,
      async: true
    }),

    new HtmlWebpackPlugin({
      template: 'client/app/index.html',
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

    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'react',
          entry: cdn.React,
          global: 'React'
        },
        {
          module: 'react-dom',
          entry: cdn.ReactDOM,
          global: 'ReactDOM'
        },
        {
          module: 'react-router',
          entry: cdn.ReactRouter,
          global: 'ReactRouter'
        },
        {
          module: 'react-router-dom',
          entry: cdn.ReactRouterDOM,
          global: 'ReactRouterDOM'
        },
        {
          module: 'react-redux',
          entry: cdn.ReactRedux,
          global: 'ReactRedux'
        },
        {
          module: 'redux',
          entry: cdn.Redux,
          global: 'Redux'
        },
        {
          module: 'redux-saga',
          entry: cdn.ReduxSaga,
          global: 'ReduxSaga'
        },
        {
          module: 'prop-types',
          entry: cdn.PropTypes,
          global: 'PropTypes'
        },
        {
          module: 'moment',
          entry: cdn.Moment,
          global: 'moment'
        },
        {
          module: 'immutable',
          entry: cdn.Immutable,
          global: 'Immutable'
        },
        {
          module: 'teasim',
          entry: cdn.Teasim,
          global: 'Teasim'
        },
      ],
    }),

    new OfflinePlugin({
      relativePaths: false,
      publicPath: '/',
      excludes: ['.htaccess.bin'],
      externals: [
        cdn.React,
        cdn.ReactDOM,
        cdn.ReactRouter,
        cdn.ReactRouterDOM,
        cdn.ReactRedux,
        cdn.Redux,
        cdn.ReduxSaga,
        cdn.PropTypes,
        cdn.Moment,
        cdn.Immutable,
        cdn.Teasim
      ],
      caches: {
        main: [':rest:'],
        additional: ['*.chunk.js']
      },
      ServiceWorker: {
        prefetchRequest: { 
          credentials: 'include' 
        },
      },
      safeToUseOptionalCaches: true,
      AppCache: false
    })
  ],

  performance: {
    assetFilter: assetFilename => !(/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename))
  }
})
