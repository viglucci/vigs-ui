module.exports = function (gulp, plugins) {
	return function () {
		return gulp.src([
			__dirname + '\\..\\node_modules\\bootstrap\\less\\**\\*.*',
		])
		.pipe(gulp.dest(__dirname + '\\..\\build\\bootstrap\\less'));
	};
};