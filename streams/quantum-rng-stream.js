var request = require('request');
var feed = 'https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint16';
var stream = require('stream');
var numToWordStream = require('./nums-to-words-transform');
//var writeFileStream = require('./file-write-stream');

var fs = require('fs');
var writeFileStream = fs.createWriteStream('./wordsfile.txt');

var qrngStream = new stream.Readable();

qrngStream._read = function () {
    request(feed, function (err, res, body) {
        var num = JSON.parse(body).data[0];
        qrngStream.push(num.toString());
    });
};


var mywordstream = qrngStream.pipe(numToWordStream);

mywordstream.pipe(writeFileStream);
mywordstream.pipe(process.stdout);