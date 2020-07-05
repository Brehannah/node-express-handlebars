//CALL THE O.R.M FUNCTIONS USING BURGER SPECIFIC INPUT FOR THE O.R.M.

var orm = require('../config/orm.js');

var burgers = {
	all: function (cb) {
		orm.all('Burgers', function (res) {
			cb(res);
		});
	},
	//COLS AND VALS ARE ARRAYS	
	create: function(cols, vals, cb) {
		orm.create('Burgers', cols, vals, function (res){
			cb(res);
		});
	},
	devour: function (objColVals, condition, cb) {
		orm.devour('Burgers', objColVals, condition, function (res) {
			cb(res);
		})
	},
	delete: function (condition, cb) {
		orm.delete('Burgers', condition, function (res) {
			cb(res);
		});
	}
};

module.exports = burgers;