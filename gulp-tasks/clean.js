module.exports = function (gulp, plugins) {
	return function () {
		return gulp.src('dist', {read: false}).pipe(plugins.clean());
	};
};