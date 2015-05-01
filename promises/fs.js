var bluebird = require('bluebird');
var fs = require('fs');

bluebird.promisifyAll(fs);

var readdir = fs.readdirAsync('./node_modules/bluebird');

var readStatsAndIsDirectory = function (filePath) {
    return fs.statAsync(filePath).then(function (stat) {
        return stat.isDirectory();
    });
};

readdir.then(function (files) {

    var fullFilePaths = files.map(function (file) {
        return './node_modules/bluebird/' + file;
    });

    return fullFilePaths;

}).filter(readStatsAndIsDirectory).then(function (dirs) {
    console.log(dirs);
});

