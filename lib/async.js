var async = module.exports = require('async');

require('sugar');

var readArguments = function (fn) {
    var match = /\([^)]*\)/.exec(fn.toString());
    return match[0].slice(1, -1).split(',').map(function (each) {
        return each.trim();
    }).slice(0, -1);
};

async.easyAuto = function () {
    var names = {},
        requires = {};

    var args = [].slice.call(arguments);
    functions = args;

    var toAsync = {};

    functions.each(function (fn) {
        if (typeof fn !== 'function') {
            throw new TypeError(fn + ' is not function');
        }

        var argNames = readArguments(fn);

        var callback = function (callback, results) {
            var argArray = argNames.map(function (each) {
                return results[each];
            });

            argArray.push(callback);

            fn.apply(null, argArray);
        };

        toAsync[fn.name] = argNames.concat([ callback ]);
    });

    async.auto(toAsync);
};
