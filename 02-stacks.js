function LinkedStack(head = null) {
  function ListNodeSingly(data, next = null) {
    return { data, next };
  }
  return {
    head,
    push(data) {
      if (this.head) {
        const newNode = ListNodeSingly(data);
        newNode.next = this.head;
        this.head = newNode;
      } else {
        this.head = ListNodeSingly(data);
      }
      return this;
    },
    pop() {
      this.head = this.head.next;
      return this;
    },
    peek() {
      return this.head.data;
    },
    size() {
      let count = 0;
      let node = this.head;
      while (node) {
        count++;
        node = node.next;
      }
      return count;
    },
  };
}

let stack = LinkedStack();
stack.push(2).push(5).pop();
console.log(stack);
console.log(stack.peek());
