module.exports = function (gulp, plugins) {
	return function () {
		return gulp.src('src/css/styleguide.css')
			.pipe(plugins.concat('styleguide.css'))
			.pipe(gulp.dest('dist/css'));
	};
};