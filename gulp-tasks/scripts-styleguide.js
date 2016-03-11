module.exports = function (gulp, plugins) {
	return function () {
		return gulp.src([
			__dirname + '\\..\\src\\js\\styleguid.js',
		])
		.pipe(plugins.concat('styleguide.js'))
		.pipe(gulp.dest(__dirname + '\\..\\dist\\jes'));
	};
};