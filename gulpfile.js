var gulp           = require('gulp');
var jshint         = require('gulp-jshint');
var jshintReporter = require('jshint-stylish');
var watch          = require('gulp-watch');
var nodemon        = require('gulp-nodemon');

var paths = {
  'src': ['./models/**/*.js','./routes/**/*.js', 'keystone.js', 'package.json']
};

gulp.task('lint', function(){

  gulp.src(paths.src)
    .pipe(jshint())
    .pipe(jshint.reporter(jshintReporter));

});

gulp.task('watch:lint', function () {

  gulp.src(paths.src)
    .pipe(watch())
    .pipe(jshint())
    .pipe(jshint.reporter(jshintReporter));

});

gulp.task('develop', function() {

  nodemon({ script: 'keystone.js' })

});

gulp.task('watch', ['watch:lint']);
gulp.task('default', ['watch', 'develop']);
