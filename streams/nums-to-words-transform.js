var stream = require('stream');
var ntwStream = new stream.Transform();

var words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

ntwStream._transform = function (numbers, encoding, cb) {

    numbers = numbers.toString().split('');

    numbers = numbers.map(function (n) {
        return words[parseInt(n)];
    }).join(' ');

    setTimeout(function () {
        ntwStream.push(numbers);
        cb();
    }, 5);

};

module.exports = ntwStream;