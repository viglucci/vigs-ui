var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname, 'dist/styleguide.html'));
});

var express_port = 16005;
app.listen(express_port, function () {
	console.log('vigs-ui styleguide listening on %s', express_port);
});