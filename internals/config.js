const resolve = require('path').resolve
const pullAll = require('lodash.pullall')
const uniq = require('lodash.uniq')

const ReactBoilerplate = {
  version: '0.1.0',
  dllPlugin: {
    defaults: {
      exclude: [
        'chalk',
        'compression',
        'cross-env',
        'express',
        'ip',
        'minimist'
      ],
      include: ['core-js', 'eventsource-polyfill', 'babel-polyfill'],
      path: resolve('../node_modules/react-boilerplate-dlls')
    },

    entry (pkg) {
      const dependencyNames = Object.keys(pkg.dependencies)
      const exclude = pkg.dllPlugin.exclude || ReactBoilerplate.dllPlugin.defaults.exclude
      const include = pkg.dllPlugin.include || ReactBoilerplate.dllPlugin.defaults.include
      const includeDependencies = uniq(dependencyNames.concat(include))

      return {
        reactBoilerplateDeps: pullAll(includeDependencies, exclude)
      }
    }
  }
}

module.exports = ReactBoilerplate
