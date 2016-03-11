var gulp 		= require('gulp');
var plugins 	= require('gulp-load-plugins')();

module.exports = {
	//"build": require('./gulp-tasks/build')(gulp, plugins) 
	//gulp.task('vigs-ui-build', require('./gulp-tasks/build')(gulp, plugins))
	'tasks': require('./gulpfile').tasks
}