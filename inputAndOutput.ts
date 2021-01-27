"use strict";
import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(line) {
  const [A, B] = line.split(" ").map(Number);
  console.log(A === B ? "==" : (A > B ? ">" : "<"));
  rl.close();
}).on("close", function() {
  process.exit();
});
