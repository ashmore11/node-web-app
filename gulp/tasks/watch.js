var gulp       = require('gulp');
var livereload = require('gulp-livereload');
var config     = require('../config');

gulp.task('watch', function() {

  livereload.listen();

	gulp.watch(config.paths.styles.watch, ['styles']);

	gulp.emit('update');

});