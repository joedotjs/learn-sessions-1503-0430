var fs = require('fs');
var stream = require('stream');

var writeFileStream = new stream.Writable();

writeFileStream._write = function (wordsString, encoding, next) {

    fs.appendFile('./wordsfile.txt', wordsString + '\n', function (err) {
        if (err) console.error(err);
        next();
    });

};

module.exports = writeFileStream;