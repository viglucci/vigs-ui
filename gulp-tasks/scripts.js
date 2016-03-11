module.exports = function (gulp, plugins) {
    return function () {
        return gulp.src('node_modules/bootstrap/js/*.js')
            .pipe(plugins.concat('scripts.js'))
            .pipe(plugins.uglify())
            .pipe(gulp.dest('dist'));
    };
};