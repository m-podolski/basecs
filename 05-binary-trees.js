// Additional materials
// https://www.youtube.com/watch?v=oSWTXtMglKE
// https://www.cs.jhu.edu/~cohen/CS226/Lectures/Trees.pdf
// http://cslibrary.stanford.edu/110/BinaryTrees.html
// https://stackoverflow.com/questions/30736577/find-the-parent-node-of-a-node-in-binary-search-tree

function BST() {
  function getRandomInt() {
    return Math.round(Math.random() * 100);
  }

  function Node(data = getRandomInt(), left = null, right = null) {
    const node = Object.create(NodePrototype);
    node.data = data;
    node.left = left;
    node.right = right;

    return node;
  }

  const NodePrototype = {
    data: null,
    left: null,
    right: null,
    insert(value = getRandomInt()) {
      if (value === this.data) return this;
      if (value <= this.data) {
        if (this.left === null) {
          this.left = Node(value);
        } else {
          this.left.insert(value);
        }
      } else {
        if (this.right === null) {
          this.right = Node(value);
        } else {
          this.right.insert(value);
        }
      }
      return this;
    },
    contains(value) {
      if (value === this.data) return true;
      if (value < this.data) {
        if (this.left === null) {
          return false;
        } else {
          return this.left.contains(value);
        }
      } else {
        if (this.right === null) {
          return false;
        } else {
          return this.right.contains(value);
        }
      }
    },
    printInOrder() {
      // in-order-traversal
      if (this.left !== null) this.left.printInOrder();
      console.log(this.data);
      if (this.right !== null) this.right.printInOrder();
    },
    findParent(parent, childValue) {
      // post-order-traversal
      if (parent.isRoot) {
        return "Node is root";
      }
      if (childValue === this.data) {
        return parent;
      }
      if (this.left !== null && childValue < this.data) {
        return this.left.findParent(this, childValue);
      }
      if (this.right !== null && childValue > this.data) {
        return this.right.findParent(this, childValue);
      }
    },
    getDepth(nodeValue, level = 0) {
      // pre-order-traversal
      if (this.data === nodeValue) return level;
      if (this.left !== null && nodeValue < this.data) {
        return this.left.getDepth(nodeValue, level + 1);
      }
      if (this.right !== null && nodeValue > this.data) {
        return this.right.getDepth(nodeValue, level + 1);
      }
    },
  };

  // const root = Node()
  const root = Node(5);
  root.isRoot = true;

  return root;
}

let bst = BST();

for (let i = 0; i < 10; i++) {
  // bst.insert();
  bst.insert(i + 1);
}

// bst.insert(5);
// console.log("contains 5: ", bst.contains(5));

// bst.printInOrder();

// console.log(bst.findParent(bst, 5));

console.log(bst.getDepth(9));
