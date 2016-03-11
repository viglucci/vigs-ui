var child = require('child_process');

module.exports = function (gulp, plugins) {
	require('./build')(gulp, plugins);
	return gulp.task('styleguide', ['build'], function() {
		var server = child.spawn('node', ['styleguide-server.js']);
		server.stdout.on('data', function (data) {
			console.log(data.toString());
		});
		server.stderr.on('data', function (data) {
			console.log(data.toString());
		});
		server.on('exit', function (code) {
			console.log('child process exited with code ' + code);
		});
	});
}