var gulp        = require('gulp');
var webpack     = require('gulp-webpack');
var gulpif      = require('gulp-if');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');
var livereload  = require('gulp-livereload');
var handleError = require('../util/handleError');
var config      = require('../config');

gulp.task('scripts', function() {
  
  gulp.src(config.paths.scripts.source)

    .pipe(webpack(config.webpack))
    
    .on('error', handleError)

    .pipe(gulpif(config.env.production, uglify()))
    .pipe(rename(config.paths.scripts.filename))
    .pipe(gulp.dest(config.paths.scripts.destination))
    .pipe(gulpif(config.env.development, livereload()));

});
