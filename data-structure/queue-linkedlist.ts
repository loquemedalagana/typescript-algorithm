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
    if(this.isEmpty()) throw Error("queue is empty");
    const deletedItem = this.head.data;
    this.head = this.head.next;
    this._size--;
    if(this.isEmpty()) this.tail = null;
    return deletedItem;
  }

}

