var _ = require('underscore');

var li = _.filter(_.range(1, 1000), function(n) {
    return n % 3 == 0 || n % 5 == 0;
});
var rslt = _.reduce(li, function(x, y) {return x + y;});
console.log(rslt);
