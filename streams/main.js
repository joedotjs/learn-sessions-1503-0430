var qrng = require('./quantum-rng');

qrng.on('data', function (num) {
    console.log(num);
});