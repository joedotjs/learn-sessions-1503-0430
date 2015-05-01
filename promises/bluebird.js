var bluebird = require('bluebird');
var request = require('request');
var fs = require('fs');

bluebird.promisifyAll(fs);
bluebird.promisifyAll(request);

var getGoogle = request.getAsync('http://www.google.com').get(1);
var getFacebook = request.getAsync('http://www.facebook.com').get(1);
var getTumblr = request.getAsync('http://www.tumblr.com').get(1);

var getAllWebsites = bluebird.all([getGoogle, getFacebook, getTumblr]);

getAllWebsites.then(function (arrayOfWebsiteHtmls) {
    arrayOfWebsiteHtmls.forEach(function (html) {
        console.log(html.length);
    });
});