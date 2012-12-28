#!/usr/bin/env escript

main(_) ->
    L = [X || X <- lists:seq(1, 1000-1, 1),
         X rem 3 =:= 0 orelse X rem 5 =:= 0],
    Rslt = lists:sum(L),
    io:format("~p", [Rslt]).
