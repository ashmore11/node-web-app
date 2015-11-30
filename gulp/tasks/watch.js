var gulp       = require('gulp');
var livereload = require('gulp-livereload');
var watch      = require('gulp-watch');
var chalk      = require('chalk');
var config     = require('../config');

gulp.task('watch', function() {

  livereload.listen();

	gulp.watch(config.paths.styles.watch, ['styles']);
	gulp.watch(config.paths.scripts.watch, ['scripts']);

  watch(config.paths.templates.watch, function() {

    console.log(chalk.green('------------------------------'));
    console.log(chalk.green('template updated, reloading...'));
    console.log(chalk.green('------------------------------'));

    livereload.reload();

  });

	gulp.emit('update');

});
