module.exports = function (gulp, plugins) {
	return function () {
		return gulp.src('node_modules/jquery/dist/jquery.js')
			.pipe(plugins.concat('jquery.js'))
			//.pipe(plugins.uglify())
			.pipe(gulp.dest('dist/js'));
	};
};