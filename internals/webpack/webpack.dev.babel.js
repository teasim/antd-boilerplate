const path = require('path')
const fs = require('fs-extra')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const cheerio = require('cheerio')
const logger = require('../../server/logger')
const pkg = require(path.resolve(process.cwd(), 'package.json'))
const dllPlugin = pkg.dllPlugin

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new HtmlWebpackPlugin({
    inject: true,
    templateContent: templateContent()
  }),
  new CircularDependencyPlugin({
    exclude: /a\.js|node_modules/,
    failOnError: false
  })
]

process.traceDeprecation = true
process.noDeprecation = true

module.exports = require('./webpack.base.babel')({
  entry: [
    'eventsource-polyfill',
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'client/app/index.js')
  ],

  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },

  plugins: dependencyHandlers().concat(plugins),

  babelQuery: {
    presets: ['babel-preset-react-hmre'].map(require.resolve)
  },

  devtool: 'eval-source-map',

  performance: {
    hints: false
  }
})

function dependencyHandlers () {
  if (process.env.BUILDING_DLL) {
    return []
  }

  if (!dllPlugin) {
    return [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        children: true,
        minChunks: 2,
        async: true
      })
    ]
  }

  const dllPath = path.resolve(process.cwd(), dllPlugin.path || 'node_modules/react-boilerplate-dlls')

  if (!dllPlugin.dlls) {
    const manifestPath = path.resolve(dllPath, 'reactBoilerplateDeps.json')

    if (!fs.existsSync(manifestPath)) {
      logger.error('The DLL manifest is missing. Please run `npm run build:dll`')
      process.exit(0)
    }

    return [
      new webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: require(manifestPath)
      })
    ]
  }

  const dllManifests = Object.keys(dllPlugin.dlls).map(name => path.join(dllPath, `/${name}.json`))

  return dllManifests.map(manifestPath => {
    if (!fs.existsSync(path)) {
      if (!fs.existsSync(manifestPath)) {
        logger.error(`The following Webpack DLL manifest is missing: ${path.basename(manifestPath)}`)
        logger.error(`Expected to find it in ${dllPath}`)
        logger.error('Please run: npm run build:dll')

        process.exit(0)
      }
    }

    return new webpack.DllReferencePlugin({
      context: process.cwd(),
      manifest: require(manifestPath)
    })
  })
}

function templateContent () {
  const html = fs.readFileSync(
    path.resolve(process.cwd(), 'client/app/templates/index.html')
  ).toString()

  if (!dllPlugin) {
    return html
  }

  const doc = cheerio(html)
  const body = doc.find('body')
  const dllNames = !dllPlugin.dlls ? ['reactBoilerplateDeps'] : Object.keys(dllPlugin.dlls)

  dllNames.forEach(dllName => body.append(`<script data-dll='true' src='/${dllName}.dll.js'></script>`))

  return doc.toString()
}
