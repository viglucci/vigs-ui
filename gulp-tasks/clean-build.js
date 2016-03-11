module.exports = function (gulp, plugins) {
	return function () {
		return gulp.src(['build'], {read: false}).pipe(plugins.clean());
	};
};