#!/usr/bin/perl
use strict;
use warnings;

my $sum = 0;
for (my $p = 1, my $n = 2; $n <= 4000000; ($p, $n) = ($n, $n + $p)) {
    $sum += ($n % 2 == 0) ? $n : 0;
}

print($sum);
