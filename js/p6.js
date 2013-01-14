var _ = require('underscore');

_.mixin({
    sum : function(seq) {
        return _.reduce(seq, function(memo, num) { return memo + num; }, 0);
    }
});

var r = _.range(1, 101);

var sum_of_square = _.sum(_.map(r, function(x) {return x*x;}));
var square_of_sum = Math.pow(_.sum(r), 2);
var rslt = square_of_sum - sum_of_square;

console.log(rslt);
