var gulp       = require('gulp');
var livereload = require('gulp-livereload');
var config     = require('../config');

gulp.task('watch', function() {

  livereload.listen();

	gulp.watch(config.paths.styles.watch, ['styles']);

  // TODO - watch for changes to jade files
  // gulp.watch(config.paths.templates.watch, [livereload()]);

	gulp.emit('update');

});