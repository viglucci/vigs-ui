module.exports = function (gulp, plugins) {
	return function () {
		return gulp.src([
			__dirname + '\\..\\node_modules\\jquery\\dist\\jquery.js',
		])
		.pipe(plugins.concat('jquery.js'))
		.pipe(gulp.dest(__dirname + '\\..\\dist\\js'));
	};
};