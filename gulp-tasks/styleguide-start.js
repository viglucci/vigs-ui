module.exports = function (gulp, plugins) {
	return function () {
		// start the server - log & pipe output to the console
		gulp.task('styleguide-start', ['build'], function() {
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
	};
};