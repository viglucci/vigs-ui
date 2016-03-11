module.exports = function (gulp, plugins) {
	return function () {
		return gulp.src([
			'src/less/variables.less',
			'src/less/dropdowns.less'
		])
		.pipe(gulp.dest('build/bootstrap/less'));
	};
};