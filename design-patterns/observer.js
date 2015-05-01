var request = require('request');
var feed = 'https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint16';

setInterval(function () {
    request(feed, function (err, res, body) {
        var num = JSON.parse(body).data[0];
        qrng.broadcastRandomNumber(num);
    });
}, 1000);

var qrng = {
    subscribers: [],
    broadcastRandomNumber: function (num) {
        this.subscribers.forEach(function (fn) {
            fn(num);
        });
    },
    subscribeToRandomNumber: function (fn) {
        this.subscribers.push(fn);
    }
};

qrng.subscribeToRandomNumber(function (num) {
    console.log('Hooray, I got this random number:' + num);
});

qrng.subscribeToRandomNumber(function (num) {
    console.log('Huzzah, I got this random number:' + num);
});

qrng.subscribeToRandomNumber(function (num) {
    console.log('Yippy, I got this random number:' + num);
});

