module.exports = function (config) {
  config.set({
    basePath: './../',
    frameworks: ['jasmine'],
    reporters: ['progress', 'coverage'],
    files: [
      'public/bower_components/angular/angular.min.js',
      'public/bower_components/angular-route/angular-route.min.js',
      'public/bower_components/angular-sanitize/angular-sanitize.min.js',
      'public/bower_components/angular-mocks/angular-mocks.js',

      'public/views/**/*.html',

      'public/scripts/featurebook.module.js',
      'public/scripts/featurebook.routes.js',
      'public/scripts/featurebook.controller.js',
      'public/scripts/feature-viewer.controller.js',
      'public/scripts/summary.controller.js',
      'public/scripts/featurebook.service.js',
      'public/scripts/person.directive.js',
      'public/scripts/feature-tree.directive.js',
      'public/scripts/feature-node.directive.js',
      'public/scripts/gherkin-scenario.directive.js',
      'public/scripts/gherkin-step.directive.js',
      'public/scripts/gherkin-data-table.directive.js',
      'public/scripts/encode-uri-component.filter.js',
      'public/scripts/highlight-gherkin-variables.filter.js',

      'test/public/**/*.js'
    ],
    browsers: [
      'PhantomJS'
    ],
    plugins: [
      'karma-ng-html2js-preprocessor',
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-coverage'
    ],
    preprocessors: {
      'public/views/**/*.html': ['ng-html2js'],
      'public/scripts/**/*.js': 'coverage'
    },
    ngHtml2JsPreprocessor: {
      stripPrefix: 'public/',
      moduleName: 'scFeatureBook.templates'
    },
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        {type: 'lcov', subdir: 'public'}
      ]
    },
    logLevel: config.LOG_INFO,
    singleRun: true
  });
};
