module.exports = function (gulp, plugins) {
	return function () {
		return gulp.src(['dist', 'build'], {read: false}).pipe(plugins.clean());
	};
};