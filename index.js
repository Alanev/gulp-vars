'use strict';

var through = require('through2'),
	vars = require('variables');

module.exports = function () {
	function compile(file, enc, cb) {
		if (file.isBuffer()){
			var fileString = String(file.contents);
			file.contents = new Buffer(vars.replace(fileString, vars.parse(fileString)));
			cb(null, file);
		}
	}
	return through.obj(compile);
};