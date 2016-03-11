module.exports = function (gulp, plugins) {
	return function () {
		return gulp.src([
			__dirname + '\\..\\src\\less\\variables.less',
			__dirname + '\\..\\src\\less\\dropdowns.less'
		])
		.pipe(gulp.dest(__dirname + '\\..\\build\\bootstrap\\less'));
	};
};