var gulp    = require('gulp');
var nodemon = require('gulp-nodemon');
var config  = require('../config.js')

gulp.task('server', function() {

  nodemon(config.nodemon);

});
