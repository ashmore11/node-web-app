var gulp = require('gulp');

gulp.task('build', ['server', 'scripts', 'styles']);
gulp.task('default', ['build', 'watch']);
