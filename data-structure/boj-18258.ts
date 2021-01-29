"use strict";
import * as readline from 'readline';

type DataType = number;

type QueueNode = {
  readonly data: DataType;
  next?: QueueNode;
}

interface Queue {
  readonly size: number;
  readonly front: DataType;
  readonly back: DataType;

  push(data: DataType): void;
  pop(): DataType;
  isEmpty(): boolean;
}

class QueueClass implements Queue {
  private _size: number = 0;
  private head?: QueueNode; // 큐의 시작
  private tail?: QueueNode; // 큐의 마지막

  constructor() {}

  get size() {
    return this._size;
  }

  get front() {
    if(this.isEmpty()) return -1;
    return this.head.data;
  }

  get back() {
    if(this.isEmpty()) return -1;
    return this.tail.data;
  }

  isEmpty(): boolean {
    return this._size <= 0;
  }

  push(data: DataType) {
    const oldTail = this.tail;
    this.tail = {
      data,
    }
    if(this.isEmpty()) {
      this.head = this.tail;
    } else {
      oldTail.next = this.tail;
    }
    this._size++;
  }

  pop() {
    if(this.isEmpty()) return -1;
    const deletedItem = this.head.data;
    this.head = this.head.next;
    this._size--;
    if(this.isEmpty()) this.tail = null;
    return deletedItem;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const q = new QueueClass();
let ans: string = "";

rl.on("line", function(line) {
  const [ord, val] = line.split(" ");
  if(!/[1-9]/.test(ord)) {
    //console.log(ord, val);
    switch (ord) {
      case "push":
        q.push(Number(val));
        break;
      case "pop":
        ans += (q.pop() + "\n");
        break;
      case "size":
        ans += (q.size + "\n");
        break;
      case "empty":
        ans += (q.isEmpty() ? "1\n" : "0\n");
        break;
      case "front":
        ans += (q.front + "\n");
        break;
      case "back":
        ans += (q.back + "\n");
        break;
    }
  }
}).on("close", function() {
  console.log(ans);
  process.exit();
});
