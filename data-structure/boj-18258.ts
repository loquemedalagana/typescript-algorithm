"use strict";
import * as readline from 'readline';

type QueueNode<T> = {
  readonly data: T;
  next?: QueueNode<T>;
}

interface Queue<T> {
  readonly size: number;
  readonly front: T;
  readonly back: T;

  push(data: T): void;
  pop(): T;
  isEmpty(): boolean;
}

class QueueClass<T> implements Queue<T> {
  private _size: number = 0;
  private head?: QueueNode<T>; // 큐의 시작
  private tail?: QueueNode<T>; // 큐의 마지막

  get size() {
    return this._size;
  }

  get front() {
    return this.head.data;
  }

  get back() {
    return this.tail.data;
  }

  isEmpty(): boolean {
    return this._size <= 0;
  }

  push(data: T) {
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

  pop():T {
    if(this.isEmpty()) throw Error("queue is empty");
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

const q = new QueueClass<number>();
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
        ans += (q.isEmpty() ? "-1\n" : (q.pop() + "\n"));
        break;
      case "size":
        ans += (q.size + "\n");
        break;
      case "empty":
        ans += (q.isEmpty() ? "1\n" : "0\n");
        break;
      case "front":
        ans += (q.isEmpty() ? "-1\n" : (q.front + "\n"));
        break;
      case "back":
        ans += (q.isEmpty() ? "-1\n" : (q.back + "\n"));
        break;
    }
  }
}).on("close", function() {
  console.log(ans);
  process.exit();
});
