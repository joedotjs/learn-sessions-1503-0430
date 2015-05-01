var Promise = require('bluebird');
var request = require('request');

var requestWebsite = function (url) {

    var promise = new Promise(function (resolve, reject) {
        request(url, function (err, res, body) {
            if (err) {
                reject(err);
            } else {
                resolve(body);
            }
        });
    });

    return promise;

};

var gettingGoogle = requestWebsite('http://www.google.com');

var gettingWhoKnows = requestWebsite('sldfjlskdjfoiu23');

gettingGoogle.then(function (html) {
    setTimeout(function () {
        return 2;
    }, 2000);
}).then(function (html) {
    console.log(html);
    return requestWebsite('http://www.facebook.com');
}).catch(function (error) {
    console.error(error);
});

