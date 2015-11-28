var gulp = require('gulp');

gulp.task('build', ['server', 'styles']);
gulp.task('default', ['build', 'watch']);