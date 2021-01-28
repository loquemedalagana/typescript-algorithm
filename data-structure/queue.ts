type QueueNode = number;

interface Queue {
  readonly size: number;
  readonly front: QueueNode;
  push(data: QueueNode);
  pop(): void;
  isEmpty(): boolean;
}

class QueueClass {
  private queueData: QueueNode[];
  get size() {
    return this.queueData.length;
  }
  get front() {
    return this.queueData[0];
  }
  private isEmpty() {
    return this.queueData.length === 0;
  }
  push(data: QueueNode) {
    this.queueData.push(data);
  }
  pop() {
    if(this.isEmpty()) {
      throw Error("Queue is Empty!");
    }
    this.queueData.shift();
  }
}
