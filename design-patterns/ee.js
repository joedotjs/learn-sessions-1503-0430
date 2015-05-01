var request = require('request');
var feed = 'https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint16';

var EventEmitter = require('events').EventEmitter;

var qrng = new EventEmitter();

setInterval(function () {
    request(feed, function (err, res, body) {
        var num = JSON.parse(body).data[0];
        qrng.emit('randomNumber', num);
    });
}, 1000);


qrng.on('randomNumber', function (num) {
    console.log('Hooray, I got this random number:' + num);
});

qrng.on('randomNumber', function (num) {
    console.log('Huzzah, I got this random number:' + num);
});

qrng.on('randomNumber', function (num) {
    console.log('Yippy, I got this random number:' + num);
});
