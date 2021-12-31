function Tree() {
  function Node(data, nodes = null) {
    return { data, nodes };
  }

  return {
    root: Node("root"),
    add(data, parent) {
      const node = Node(data);
      if (parent.nodes) {
        parent.nodes.push(node);
      } else {
        parent.nodes = [node];
      }
      return this;
    },
    remove(parent, childIndex) {
      if (parent.nodes.length > 1) {
        parent.nodes.splice(childIndex, 1);
      } else {
        parent.nodes = null;
      }
      return this;
    },
  };
}

let tree = Tree();
tree
  .add("child1", tree.root)
  .add("child2", tree.root)
  .add("child3", tree.root.nodes[1])
  .remove(tree.root.nodes[1], 0);

console.log(tree);
// console.log(tree.root.nodes);
