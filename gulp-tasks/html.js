module.exports = function (gulp, plugins) {
	return function () {
		return gulp.src('src/html/styleguide.html')
			.pipe(gulp.dest('dist'));
	};
};