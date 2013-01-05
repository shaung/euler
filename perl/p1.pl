#!/usr/bin/perl
use strict;
use warnings;

my $sum = 0;
for (my $i = 1; $i < 1000; $i++) {
    if ($i % 3 == 0 || $i % 5 == 0) {
        $sum += $i;
    }
}

print $sum;
