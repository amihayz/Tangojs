var config = {}

config.resolver = {
	engine: 'tango.resolver.backbone',
	inlcudes: ['./public/tangocellar/js/models'],
	models: ['myapp.Wine']
}

config.db = {
	engine: 'tango.db.mongo',
	user: '',
	password: '',
	host: 'localhost',
	port: '27017',
	name: 'tangodb'
}

module.exports = config;