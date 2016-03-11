module.exports = function (gulp, plugins) {
	return function () {
		return gulp.src([
			__dirname + '\\..\\src\\css\\styleguide.css'
		])
		.pipe(plugins.concat('styleguide.css'))
		.pipe(gulp.dest(__dirname + '\\..\\dist\\css'));
	};
};