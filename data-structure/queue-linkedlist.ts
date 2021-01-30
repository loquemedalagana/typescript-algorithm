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

  pop(): T {
    if(this.isEmpty()) throw Error("queue is empty");
    const deletedItem = this.head.data;
    this.head = this.head.next;
    this._size--;
    if(this.isEmpty()) this.tail = null;
    return deletedItem;
  }
}

const q = new QueueClass<number>();
q.push(12);
q.push(23);
q.push(21);
q.push(23);

while (!q.isEmpty()) {
  console.log(q.pop());
}

