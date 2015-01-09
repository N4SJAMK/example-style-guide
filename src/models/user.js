'use strict';

function User(name, age) {
	this.age  = age  || 42;
	this.name = name || 'martin';
}

User.prototype.triage = function() {
	return (this.age *= 3);
}

User.prototype.rename = function(name) {
	return (this.name = name);
}

module.exports = User;
