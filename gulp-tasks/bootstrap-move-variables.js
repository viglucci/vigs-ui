module.exports = function (gulp, plugins) {
	return function () {
		return gulp.src('src/less/variables.less')
		.pipe(plugins.concat('variables.less'))
		.pipe(gulp.dest('build/bootstrap/less'));
	};
};