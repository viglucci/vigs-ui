var gulp 		= require('gulp');
var plugins 	= require('gulp-load-plugins')();
var child       = require('child_process');

require('./gulp-tasks/build')(gulp, plugins);
require('./gulp-tasks/clean')(gulp, plugins)
require('./gulp-tasks/clean-build')(gulp, plugins)
require('./gulp-tasks/styleguide-start')(gulp, plugins)

gulp.task('default', ['build', 'styleguide-start'], function () {
//    gulp.watch('src/js/**/*.js', ['scripts']);
//    gulp.watch('src/sass/**/*.{sass,scss}', ['sass']);
});