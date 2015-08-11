/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */

'use strict';

var gulp = require('gulp');
var wrench = require('wrench');

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});


/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});

var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages({
      remoteUrl: "ssh://55c9d5837628e16374000121@tjpalju-xhawk.rhcloud.com/~/git/tjpalju.git",
      branch: "master"
  }));
});