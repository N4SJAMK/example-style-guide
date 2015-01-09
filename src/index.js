'use strict';

var User = require('./models/user');
var user = new User('root', 10);

console.assert(user.triage() === 30 && user.age === 30);
console.assert(user.rename('markku') === 'markku' && user.name === 'markku');
