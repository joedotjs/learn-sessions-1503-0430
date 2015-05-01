var request = require('request');
var feed = 'https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint16';
var fs = require('fs');

var stream = require('stream');

var qrngStream = new stream.Readable();
var divisionTransformStream = new stream.Transform();
var writeToFileStream = fs.createWriteStream('./numbers.txt');

qrngStream._read = function () {
    request(feed, function (err, res, body) {
        var num = JSON.parse(body).data[0];
        qrngStream.push(num.toString());
    });
};

divisionTransformStream._transform = function (number, encoding, next) {
    this.push(number.toString() + Math.floor(number / 2).toString());
    next();
};

qrngStream.pipe(divisionTransformStream).pipe(writeToFileStream);

