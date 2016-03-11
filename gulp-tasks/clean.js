module.exports = function (gulp, plugins) {
	return function () {
		return gulp.src([
			__dirname + '\\..\\dist\\', 
			__dirname + '\\..\\build\\'
		],{read: false})
		.pipe(plugins.clean({force: true}));
	};
};