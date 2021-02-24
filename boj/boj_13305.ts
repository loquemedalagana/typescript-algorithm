"use strict";
import { createInterface } from "readline";

let input: Array<number>[] = [];

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

class Solve {
  private crit: number;
  private ans: number;
  n: number;
  dist: Array<number>;
  price: Array<number>;
  constructor(private readonly inputs: Array<number>[]) {
    this.ans = 0;
    this.crit = 1000000000;
    this.n = inputs[0][0];
    this.dist = inputs[1];
    this.price = inputs[2];
  }

  solve() {
    for(let i=0; i<this.n-1; i++) {
      this.crit = Math.min(this.crit, this.price[i]);
      this.ans += (this.crit * this.dist[i]);
    }
    console.log(this.ans);
  }
}

rl.on("line", function(line) {
  input.push(line.split(" ").map(Number));
  if(input.length === 3) {
    rl.close();
    const sol = new Solve(input);
    sol.solve();
  }
}).on("close", function() {
  process.exit();
});
