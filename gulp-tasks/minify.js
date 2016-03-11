module.exports = function (gulp, plugins) {
	return function () {
		return gulp.src([
			__dirname + '\\..\\dist\\css\\*.css', 
		])
		.pipe(plugins.minifyCss())
		.pipe(plugins.rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest(__dirname + '\\..\\dist\\less'));
	};
};