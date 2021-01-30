type StackNode<T> = {
  readonly data: T;
  readonly next?: StackNode<T>;
}

interface Stack<T> {
  readonly length: number; // get과 연동된다.
  push(data: T): void;
  pop(): T;
  isEmpty(): boolean;
}

class StackClass<T> implements Stack<T> {
  private _length: number = 0;
  private top?: StackNode<T>;

  constructor(private capacity: number) {}

  get length() { // 해결!!
    return this._length;
  }

  isEmpty(): boolean {
    return this._length <= 0;
  }

  push(data: T) {
    if (this.length === this.capacity) {
      throw new Error('Stack is full!');
    }
    const oldTop = this.top;
    this.top = {
      data,
      next: oldTop,
    }
    this._length+=1;
  }

  // null == undefined, null !== undefined
  pop(): T {
    if(this.isEmpty()) throw Error("stack is empty");
    this._length -= 1;
    const oldTop = this.top;
    this.top = this.top.next;
    return oldTop.data;
  }

}

const stack = new StackClass<string>(22);
stack.push("Amy");
stack.push("Dani")
stack.push("Cristian");
stack.push("Inhyuk");
stack.push("David");

while(!stack.isEmpty()) {
  console.log(stack.pop());
}

const newStack = new StackClass<number>(10);
newStack.push(22);
newStack.push(23);
newStack.push(21);

while(!newStack.isEmpty()) {
  console.log(newStack.pop());
}
