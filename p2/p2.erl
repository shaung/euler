#!/usr/bin/env escript

calc(N) ->
    calc(1, 2, 0, N).

calc(Prev, Curr, Sum, Max)
    when Sum >= Max ->
        Sum;

calc(Prev, Curr, Sum, Max)
    when Curr rem 2 == 0 ->
        calc(Curr, Curr + Prev, Sum + Curr, Max);

calc(Prev, Curr, Sum, Max) ->
    calc(Curr, Curr + Prev, Sum, Max).

main(_) ->
    Rslt = calc(4000000),
    io:format("~p", [Rslt]).
