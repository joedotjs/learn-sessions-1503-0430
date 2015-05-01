var request = require('request');
var EventEmitter = require('events').EventEmitter;
var quantumRandomNumber = new EventEmitter();
var feed = 'https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint16';

setInterval(function () {
    request(feed, function (err, res, body) {
        var num = JSON.parse(body).data[0];
        quantumRandomNumber.emit('data', num);
    });
}, 500);

module.exports = quantumRandomNumber;
