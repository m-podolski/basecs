// Additional materials
// https://introcs.cs.princeton.edu/java/43stack/
// https://introcs.cs.princeton.edu/java/43stack/Queue.java.html
// https://levelup.gitconnected.com/javascript-arrays-under-the-hood-time-complexity-d6fcc5cf95d5

function BST() {
  function Node(data = null, next = null) {
    return { data, next };
  }

  return {
    first: null,
    last: null,
    isEmpty() {
      return this.first === null;
    },
    enqueue(item) {
      if (this.isEmpty()) {
        this.first = Node(item);
        this.last = this.first;
      } else {
        const curLast = this.last;
        this.last = Node(item);
        curLast.next = this.last;
      }
      return this;
    },
    dequeue() {
      const firstNode = this.first;
      this.first = this.first.next;
      return firstNode;
    },
  };
}

let q = BST();

for (let i = 0; i < 3; i++) {
  q.enqueue(`item ${i}`);
}

console.log(q.dequeue());
console.log(q);
