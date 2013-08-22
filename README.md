# async with easy auto function

Easy auto function for async. Uses function and parameter names to determine dependencies.

```js
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
```

The result of the above is 'a b ab d' being printed.

# Caveats

This is a fun example of exploiting JS's dynamic nature. It is not recommended for production code.
