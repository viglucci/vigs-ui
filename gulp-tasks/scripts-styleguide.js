module.exports = function (gulp, plugins) {
	return function () {
		return gulp.src('src/js/styleguide.js')
			.pipe(plugins.concat('styleguide.js'))
			.pipe(gulp.dest('dist/js'));
	};
};