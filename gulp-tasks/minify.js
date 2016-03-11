module.exports = function (gulp, plugins) {
	return function () {
		return gulp.src('dist/css/*.css')
			.pipe(plugins.minifyCss())
			.pipe(plugins.rename({
				suffix: '.min'
			}))
			.pipe(gulp.dest('dist/css'));
	};
};