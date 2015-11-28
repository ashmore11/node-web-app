var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch', function() {

	gulp.watch(config.paths.styles.watch, ['styles']);

	gulp.emit('update');

});