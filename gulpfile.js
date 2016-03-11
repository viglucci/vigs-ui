var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

gulp.task('clean', require('./gulp-tasks/clean')(gulp, plugins));
gulp.task('less', require('./gulp-tasks/less')(gulp, plugins));
gulp.task('scripts-bootstrap', require('./gulp-tasks/scripts-bootstrap')(gulp, plugins));
gulp.task('scripts-jquery', require('./gulp-tasks/scripts-jquery')(gulp, plugins));
gulp.task('scripts-styleguide', require('./gulp-tasks/scripts-styleguide')(gulp, plugins));
gulp.task('html', require('./gulp-tasks/html')(gulp, plugins));
gulp.task('minify', require('./gulp-tasks/minify')(gulp, plugins));

gulp.task('scripts', ['scripts-jquery', 'scripts-bootstrap', 'scripts-styleguide']);

//gulp.task('build', ['clean', 'less', 'scripts', 'minify', 'html']);

gulp.task('build', function(cb){
	runSequence(
		'clean',
		'less',
		'scripts',
		'minify',
		'html', cb);
});

gulp.task('default', ['build'], function () {
//    gulp.watch('src/js/**/*.js', ['scripts']);
//    gulp.watch('src/sass/**/*.{sass,scss}', ['sass']);
});