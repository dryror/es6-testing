const webpackEnv = { test: true };
const webpackConfig = require('./webpack.config.js')(webpackEnv);
process.env.BABEL_ENV = 'test';
const testGlob = 'src/**/*.spec.js';
const srcGlob = 'src/**/*!(spec).js';

module.exports = config => {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [testGlob, srcGlob],
    preprocessors: {
      [testGlob]: ['webpack'],
      [srcGlob]: ['webpack'],
    },
    webpack: webpackConfig,
    webpackMiddleware: { noInfo: true },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      reporters: [
        { type: 'lcov', dir: 'coverage/', subdir: '.' },
        { type: 'json', dir: 'coverage/', subdir: '.' },
        { type: 'text-summary' },
      ],
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity,
  });
};
