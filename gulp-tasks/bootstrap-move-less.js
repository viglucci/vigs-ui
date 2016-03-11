module.exports = function (gulp, plugins) {
	return function () {
		return gulp.src('node_modules/bootstrap/less/**/*.*')
		.pipe(gulp.dest('build/bootstrap/less'));
	};
};