var express = require('express');
var path = require('path');

var server = express();
server.use(express.static(path.join(__dirname, 'public')));
server.use(express.bodyParser());

/*
wine = require('./public/tangocellar/routes/wines');
server.get('/nodecellar/wines', wine.findAll);
server.get('/nodecellar/wines/:id', wine.findById);
server.post('/nodecellar/wines', wine.addWine);
server.put('/nodecellar/wines/:id', wine.updateWine);
server.delete('/nodecellar/wines/:id', wine.deleteWine);
*/

tango = require('tango');
tangoConf = require('./tangoConfig.js');
tango.init(tangoConf);
tango.use(server);

server.get('/rebuild', function(req, res) {
	winesList = require('./winesList');
	tango.dal.remove('myserver.Wine');
	tango.dal.insert('myserver.Wine', winesList, function(err, items) {
		if (!err)
			res.send('database rebuilt successfully');
	});
});

var port = 3000;
server.listen(port);
console.log('INFO: listening to port ' + port);