'use strict';

var util = require('util');

function HTTPError(status, message) {
	Error.call(this);
	Error.captureStackTrace(this, HTTPError);

	this.status  = status;
	this.message = message;
}

util.inherits(HTTPError, Error);

module.exports = HTTPError;
