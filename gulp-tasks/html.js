module.exports = function (gulp, plugins) {
	return function () {
		return gulp.src([
			__dirname + '\\..\\src\\html\\styleguide.html'
		])
		.pipe(gulp.dest(__dirname + '\\..\\dist'));
	};
};