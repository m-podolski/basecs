function LinkedStack(head = null) {
  function ListNodeSingly(data, next = null) {
    return { data, next };
  }
  return {
    head,
    addStart(data) {
      if (this.head) {
        const newNode = ListNodeSingly(data);
        newNode.next = this.head;
        this.head = newNode;
      } else {
        this.head = ListNodeSingly(data);
      }
      return this;
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
    clear() {
      this.head = null;
    },
    getLast() {
      let lastNode = this.head;
      if (lastNode) {
        while (lastNode.next) {
          lastNode = lastNode.next;
        }
      }
      return lastNode;
    },
    getFirst() {
      return this.head;
    },
  };
}

let list = LinkedStack();
list.addStart(2).addStart(5);
console.log(list);
