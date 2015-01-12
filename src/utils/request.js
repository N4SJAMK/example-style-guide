'use strict';

var parse     = require('safe-json-parse');
var request   = require('request');
var RSVP      = require('promise');
var HTTPError = require('./http-error');

var BASE_URL = 'http://jsonplaceholder.typicode.com/';

module.exports = function(endpoint) {
	return new RSVP(function(resolve, reject) {
		request.get(BASE_URL + endpoint, function(err, res, body) {
			if(err) {
				return reject(err);
			}

			if(res.statusCode !== 200) {
				return reject(new HTTPError(res.statusCode, res.text));
			}

			parse(body, function(err, json) {
				if(err) {
					return reject(err);
				}
				return resolve(json);
			});
		});
	});
}
