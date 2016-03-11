var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('clean', require('./gulp-tasks/clean')(gulp, plugins));
gulp.task('less', ['clean'], require('./gulp-tasks/less')(gulp, plugins));
gulp.task('minify', ['less'], require('./gulp-tasks/minify')(gulp, plugins));

gulp.task('build', ['clean', 'less', 'minify']);

gulp.task('default', ['build'], function () {
//    gulp.watch('src/js/**/*.js', ['scripts']);
//    gulp.watch('src/sass/**/*.{sass,scss}', ['sass']);
});