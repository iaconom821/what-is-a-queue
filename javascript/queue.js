class Queue {
  constructor() {
    this.queue = [];
    // this is an arbitrary value to make testing easier
    // 1,024 would be way too high to test!
    this.limit = 10;
  }

  // add item to rear of queue if not full
  // if full throw error
  enqueue(item) {
    if (this.queue.length < 10) {
      this.queue.push(item)
    } else {
      throw new Error 
    }
  }

  // remove item from front of queue and return it
  dequeue() {
    return this.queue.shift()
  }

  // return item at front of queue without removing it
  peek() {
    return this.queue[0]
  }

  // return true if queue is empty, otherwise false
  isEmpty() {
    if (this.queue.length === 0){
      return true 
    } else {
      return false 
    }
  }

  // return true if queue is full, otherwise false
  isFull() {
    return this.queue.length === 10 ? true : false 
  }

  // return number of items in queue
  size() {
    return this.queue.length 
  }

  // return -1 if item not in queue, otherwise integer representing 
  // how far it is from the front
  search(target) {
    return this.queue.includes(target) ? this.queue.indexOf(target) : -1
  }

  // print contents of queue: do not return the queue itself!
  print() {
    this.queue.forEach(item => console.log(item))
  }
}

if (require.main === module) {
  // add your own tests in here
  const queue = new Queue

  console.log(queue.enqueue(1))
  console.log(queue.enqueue(2))
  console.log(queue.enqueue(3))
  console.log(queue.enqueue(4))
  console.log(queue.queue)
  console.log(queue.dequeue())
  console.log(queue.isEmpty())
  console.log(queue.peek())
  console.log(queue.isFull())
  console.log(queue.size())
  console.log(queue.print()) 

}

module.exports = Queue;
