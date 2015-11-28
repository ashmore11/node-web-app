var gulp        = require('gulp');
var gulpif      = require('gulp-if');
var stylus      = require('gulp-stylus');
var nib         = require('nib');
var rupture     = require('rupture');
var jeet        = require('jeet');
var handleError = require('../util/handleError');
var CSSmin      = require('gulp-minify-css');
var config      = require('../config');

gulp.task('styles', function() {
  
  gulp.src(config.paths.styles.source)
    
    .pipe(stylus({
      set: ['include css'],
      use: [nib(), rupture(), jeet()],
      linenos: config.env.development,
    }))
    
    .on('error', handleError)

    .pipe(gulpif(config.env.production, CSSmin()))
    .pipe(gulp.dest(config.paths.styles.destination));

});