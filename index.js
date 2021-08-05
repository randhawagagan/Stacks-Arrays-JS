

class Stack{
  constructor(){
    this.array = [];
  }
  peek(){
  this.array[this.array-1];
  return this;
}

push(value){
  this.array.push(value);
  return this;
}

pop(){
  this.array.pop();
  return this;
}
}


const myStack = new Stack();
myStack.push(1);
myStack.push(5);
myStack.push(6);
myStack.push(17);
myStack.pop();

