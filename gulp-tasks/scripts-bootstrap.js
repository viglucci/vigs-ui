module.exports = function (gulp, plugins) {
	return function () {
		return gulp.src([
			__dirname + '\\..\\node_modules\\bootstrap\\js\\**\\*.js',
		])
		.pipe(plugins.concat('bootstrap.js'))
		.pipe(gulp.dest(__dirname + '\\..\\dist\\js'));
	};
};