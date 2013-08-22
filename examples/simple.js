var async = require('async');
require('./async');

async.easyAuto(
    function a(callback) {
        callback(null, 'a');
    },

    function b(callback) {
        callback(null, 'b');
    },

    function ab(a, b, callback) {
        callback(null, a + b);
    }, 

    function d(callback) {
        callback(null, 'd');
    },

    function e(a, b, ab, d, callback) {
        console.log(a, b, ab, d);
    }
);

