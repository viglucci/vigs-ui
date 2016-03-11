module.exports = function (gulp, plugins) {
	return function () {
		return gulp.src('node_modules/bootstrap/less/bootstrap.less')
			.pipe(plugins.less())
			.pipe(plugins.autoprefixer())
			.pipe(gulp.dest('dist/css'));
	};
};