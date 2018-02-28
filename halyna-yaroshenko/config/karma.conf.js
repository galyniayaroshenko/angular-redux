const webpackConfig = require('./webpack.test');

module.exports = function (config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      { pattern: './config/karma-test-shim.js', watched: false }
    ],

    preprocessors: {
      './config/karma-test-shim.js': ['coverage', 'webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    coverageReporter: {
      dir : 'coverage/',
      reporters: [
        { type: 'text-summary' }
      ]
    },

    mochaReporter: {
      symbols: {
        success: '+',
        info: '#',
        warning: '!',
        error: 'x'
      }
    },

    reporters: ['mocha', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_WARN,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true
  });
};
