module.exports = function (gulp, plugins) {
	return function () {
		return gulp.src('build/bootstrap/less/bootstrap.less')
			.pipe(plugins.less())
			.pipe(plugins.autoprefixer())
			.pipe(gulp.dest('dist/css'));
	};
};