"use strict";
import { createInterface } from "readline";

let N: number, M: number, inputsValue: Array<number>[] = [];

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

type Edge = {
  from: number;
  to: number;
  cost: number;
}

interface IMst {
  graph: Array<Edge>;
  parents: Array<number>;
  inputs: readonly Array<number | undefined>[];
  find: (x: number) => number;
  union: (x: number, y: number) => void;
  minCost: () => number;
  solve: () => void;
}

class Mst implements IMst {
  graph: Array<Edge>;
  parents: Array<number>;
  constructor(readonly inputs: readonly Array<number>[]) {
    this.graph = inputs.map(([from, to, cost]) => ({
      from,
      to,
      cost,
    }));
    this.graph.sort((first, second) => first.cost - second.cost);
    this.parents = new Array(N + 1).fill(0).map((_, i) => i);
  }

  find(x: number): number {
    if(x === this.parents[x]) return x;
    return this.parents[x] = this.find(this.parents[x]);
  }

  union(a: number, b: number) {
    a = this.find(a);
    b = this.find(b);
    this.parents[a] = b;
  }

  minCost(): number {
    let ret: number = 0;
    for(let i=0; i<M; i++) {
      let a: number = this.find(this.graph[i].from);
      let b: number = this.find(this.graph[i].to);

      if(a !== b) {
        this.union(this.graph[i].from, this.graph[i].to);
        ret += this.graph[i].cost;
      }
    }
    return ret;
  }

  solve() {
    console.log(this.minCost());
  }
}

rl.on("line", function(line) {
  const [A, B, C] = line.split(" ").map(Number);
  if(C === undefined) {
    N = A;
    M = B;
  } else {
    inputsValue.push([A, B, C]);
  }
  if(inputsValue && inputsValue.length === M) {
    const mst = new Mst(inputsValue);
    mst.solve();
  }
}).on("close", function() {
  process.exit();
});
