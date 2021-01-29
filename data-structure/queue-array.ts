type QueueNode = number;

interface Queue {
  readonly size: number;
  readonly front: QueueNode;
  readonly back: QueueNode;
  push(data: QueueNode): void;
  pop(): QueueNode;
  isEmpty(): boolean;
}

class QueueClass implements Queue {
  private queueData: QueueNode[] = [];
  get size() {
    return this.queueData.length;
  }
  isEmpty() {
    return this.queueData.length === 0;
  }
  get front() {
    return this.queueData[0];
  }
  get back() {
    return this.queueData[this.size - 1];
  }
  push(data: QueueNode) {
    this.queueData.push(data);
  }
  pop() {
    if(this.isEmpty()) {
      throw Error("Queue is empty");
    }
    const val = this.front;
    this.queueData.shift();
    return val;
  }
}
