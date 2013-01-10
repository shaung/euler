var _ = require('underscore');

_.mixin({
    makedict : function(keys, valfunc) {
        return _.object(keys, _.map(keys, valfunc));
    },

    product : function(list) {
        return _.reduce(list, function(x, y){ return x * y; }, 1);
    }
});


var r = _.range(2, 21);

var get_factors = function(n) {
    var rslt = _.makedict(r, function(i){ return 0; });
    for (var i = 2; i <= 20 && n > 1; i++) {
        while (n % i == 0) {
            n /= i;
            rslt[i]++;
        }
    }
    return rslt;
};

var factors = _.makedict(r, function(i) {
    var all_factors = _.map(r, get_factors);
    return _.max(_.pluck(all_factors, i));
});

factors = _.map(_.pairs(factors), function(li) {
    var k = li[0], v = li[1];
    return Math.pow(k, v);
});

var rslt = _.product(factors);

console.log(rslt)
