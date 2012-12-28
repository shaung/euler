object P1 {
  def main(args: Array[String]) {
    var rslt =
      List.range(1, 1000)
          .filter(x => x % 3 == 0 || x % 5 == 0)
          .sum
    println(rslt);
  }
}
