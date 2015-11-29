var gulp    = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('server', function() {

  nodemon({
    script: 'keystone.js',
    ignore: ['gulp', 'public', 'node_modules']
  });

});