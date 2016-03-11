var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('less', require('./gulp-tasks/less')(gulp, plugins));
gulp.task('minify', ['less'], require('./gulp-tasks/minify')(gulp, plugins));

gulp.task('build', ['less', 'minify']);

gulp.task('default', ['build'], function () {
//    gulp.watch('src/js/**/*.js', ['scripts']);
//    gulp.watch('src/sass/**/*.{sass,scss}', ['sass']);
});