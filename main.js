// This homework is to practice the two Data Structures Stack & Queue
// This has nothing to do with the Call Stack and the Event Queue
// It's just pure JavaScript

// This is a question that you are often asked to implement on a whiteboard

// Create a github repo for this and submit the link inside the Populi Assignment

// You are going to build 2 classes.
// 1. A Stack
// 2. A Queue

// You will create a separate array for each class  as your stack or queue
// The 2 classes have nothing to do with each other.

// Stack Class

// There must be an array to represent the stack at start and it will initialize empty
// Stacks typically are built with the following methods
// 1) Push method adds to the top of the stack
// 2) Pop method removes from the top of the stack
// 3) Peek logs the top element on the stack
// 4) isEmpty returns true if the stack is empty
console.clear();
class Stack {
  constructor(arr = []) {
    this.arr = arr;
  }
  push(value) {
    this.arr.unshift(value);
    return this;
  }
  pop() {
    this.arr.shift();
    return this;
  }
  peek() {
    console.log(`${this.arr[0]} is the top of the stack`);
  }
  isEmpty() {
    return this.arr.length === 0;
  }
}

let arr1 = new Stack();
arr1.push(3);
arr1.push("hi");
arr1.push("what now");
arr1.pop();
arr1.isEmpty;
arr1.peek();
console.log(arr1);

// Queue Class

// There must be an array to represent the queue and it will initialize empty

// Queues typically are built with the following methods
// 1) Enqueue method adds to the back of the queue
// 2) Dequeue method removes from the front of the queue
// 3) Front logs the element at the front of the queue
// 4) isEmpty return true if the queue is empty
// 5) printQueue returns a string of items in the queue separated by commas
class Queue {
  constructor(arr = []) {
    this.arr = arr;
  }
  Enqueue(value) {
    this.arr.push(value);
    return this;
  }
  Dequeue() {
    this.arr.shift();
    return this;
  }
  Front() {
    console.log(`${this.arr[0]} is at the front of the Queue.`);
  }
  isEmpty() {
    console.log(this.arr.length === 0);
  }
  printQueue() {
    console.log(this.arr.join(", "));
  }
}

// let arr1 = new Queue();
// arr1.Enqueue(3)
// arr1.Enqueue('hi')
// arr1.Enqueue('what now')
// arr1.printQueue()
// arr1.Dequeue()
// arr1.printQueue()
// arr1.isEmpty
// arr1.Front()

// - Don't overthink this. It is as easy as it may appear.
// - It doesn't matter which end you consider the top of your stack as long as you are consistent.
