type StackNode = {
  readonly data: string;
  readonly next?: StackNode;
}

interface Stack {
  readonly length: number; // get과 연동된다.
  push(data: string);
  pop(): string;
  isEmpty(): boolean;
}

class StackClass implements Stack {
  private _length: number = 0;
  private top?: StackNode;

  get length() { // 해결!!
    return this._length;
  }

  isEmpty(): boolean {
    return this._length <= 0;
  }

  push(data: string) {
    this._length+=1;
    const oldTop = this.top;
    this.top = {
      data,
      next: oldTop,
    }
  }

  // null == undefined, null !== undefined
  pop(): string {
    if(this.isEmpty()) throw Error("stack is empty");
    this._length -= 1;
    const topData = this.top.data;
    this.top = this.top.next;
    return topData;
  }

}

const stack = new StackClass();
stack.push("Amy");
stack.push("Dani")
stack.push("Cristian");
stack.push("Inhyuk");
stack.push("David");

while(!stack.isEmpty()) {
  console.log(stack.pop());
}
