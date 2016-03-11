var path 	= require('path');
var express = require('express');
var app 	= express();

app.use('/images',express.static(path.join(__dirname, 'dist/images')));
app.use('/js',express.static(path.join(__dirname, 'dist/js')));
app.use('/css',express.static(path.join(__dirname, 'dist/css')));

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname, 'dist/styleguide.html'));
});

var express_port = 17005;
app.listen(express_port, function () {
	console.log('vigs-ui styleguide listening on %s', express_port);
});