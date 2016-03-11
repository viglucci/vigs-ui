var runSequence = require('run-sequence');

module.exports = function (gulp, plugins) {

	gulp.task('clean', require('./clean')(gulp, plugins));
	gulp.task('clean-build', require('./clean-build')(gulp, plugins));
	gulp.task('less', ['bootstrap-staging'], require('./less')(gulp, plugins));
	gulp.task('css-styleguide', require('./css-styleguide')(gulp, plugins));
	gulp.task('scripts-bootstrap', require('./scripts-bootstrap')(gulp, plugins));
	gulp.task('scripts-jquery', require('./scripts-jquery')(gulp, plugins));
	gulp.task('scripts-styleguide', require('./scripts-styleguide')(gulp, plugins));
	gulp.task('html', require('./html')(gulp, plugins));
	gulp.task('minify', require('./minify')(gulp, plugins));

	gulp.task('bootstrap-move-less', require('./bootstrap-move-less')(gulp, plugins));
	gulp.task('bootstrap-move-variables', ['bootstrap-move-less'], require('./bootstrap-move-variables')(gulp, plugins));
	gulp.task('bootstrap-staging', ['bootstrap-move-less', 'bootstrap-move-variables']);

	gulp.task('styles', ['bootstrap-staging', 'less', 'css-styleguide']);
	gulp.task('scripts', ['scripts-jquery', 'scripts-bootstrap', 'scripts-styleguide']);

	return gulp.task('build', function(cb){
		runSequence(
			'clean',
			'styles',
			'scripts',
			'minify',
			'html',
			'clean-build', cb);
	});
};
