module.exports = function (gulp, plugins) {
	return function () {
		return gulp.src([
			__dirname + '\\..\\node_modules\\bootstrap\\less\\bootstrap.less',
		])
		.pipe(plugins.less())
		.pipe(plugins.autoprefixer())
		.pipe(gulp.dest(__dirname + '\\dist\\less'));
	};
};