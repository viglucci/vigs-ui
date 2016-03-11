module.exports = function (gulp, plugins) {
	return function () {
		gulp.src('dist/*.css')
			.pipe(plugins.minifyCss())
			.pipe(plugins.rename({
				suffix: '.min'
			}))
			.pipe(gulp.dest('dist'));
	};
};