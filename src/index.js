'use strict';

var request = require('./utils/request');

request('todos').then(
	function onTodos(todos) {
		console.log(todos);
	},
	function onError(err) {
		console.log(err);
	});
