module.exports = function (gulp, plugins) {
	return function () {
		gulp.src('node_modules/bootstrap/less/bootstrap.less')
			.pipe(plugins.less())
			.pipe(plugins.autoprefixer())
			.pipe(gulp.dest('dist'));
	};
};