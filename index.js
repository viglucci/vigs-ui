var gulp 		= require('gulp');
var plugins 	= require('gulp-load-plugins')();

module.exports = {
	"tasks": {
		"build": require('./gulp-tasks/build')(gulp, plugins),
		"clean": require('./gulp-tasks/clean')(gulp, plugins),
		"clean-build": require('./gulp-tasks/clean-build')(gulp, plugins),
		"styleguide-start": require('./gulp-tasks/styleguide')(gulp, plugins),
	}
}