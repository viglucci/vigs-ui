var gulp 		= require('gulp');
var plugins 	= require('gulp-load-plugins')();

require('./gulp-tasks/build')(gulp, plugins);
require('./gulp-tasks/clean')(gulp, plugins);
require('./gulp-tasks/clean-build')(gulp, plugins);
require('./gulp-tasks/styleguide')(gulp, plugins);

gulp.task('default', ['build'], function () {
//    gulp.watch('src/js/**/*.js', ['scripts']);
//    gulp.watch('src/sass/**/*.{sass,scss}', ['sass']);
});

module.exports = gulp;