var gulp 		= require('gulp');
var plugins 	= require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var child       = require('child_process');

gulp.task('clean', require('./gulp-tasks/clean')(gulp, plugins));
gulp.task('less', require('./gulp-tasks/less')(gulp, plugins));
gulp.task('css-styleguide', require('./gulp-tasks/css-styleguide')(gulp, plugins));
gulp.task('scripts-bootstrap', require('./gulp-tasks/scripts-bootstrap')(gulp, plugins));
gulp.task('scripts-jquery', require('./gulp-tasks/scripts-jquery')(gulp, plugins));
gulp.task('scripts-styleguide', require('./gulp-tasks/scripts-styleguide')(gulp, plugins));
gulp.task('html', require('./gulp-tasks/html')(gulp, plugins));
gulp.task('minify', require('./gulp-tasks/minify')(gulp, plugins));

gulp.task('styles', ['less', 'css-styleguide']);
gulp.task('scripts', ['scripts-jquery', 'scripts-bootstrap', 'scripts-styleguide']);

//gulp.task('build', ['clean', 'less', 'scripts', 'minify', 'html']);

gulp.task('build', function(cb){
	runSequence(
		'clean',
		'styles',
		'scripts',
		'minify',
		'html', cb);
});

// start the server - log & pipe output to the console
gulp.task('styleguide-start', ['build'], function() {
	var server = child.spawn('node', ['index.js']);
	server.stdout.on('data', function (data) {
		console.log(data.toString());
	});
	server.stderr.on('data', function (data) {
		console.log(data.toString());
	});
	server.on('exit', function (code) {
		console.log('child process exited with code ' + code);
	});
});

gulp.task('default', ['build', 'styleguide-start'], function () {
//    gulp.watch('src/js/**/*.js', ['scripts']);
//    gulp.watch('src/sass/**/*.{sass,scss}', ['sass']);
});