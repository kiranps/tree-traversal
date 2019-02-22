interface Node {
  x: Float32Array;
  y: Float32Array;
  value: number;
  children: Node[];
}

interface NodeArr {
  x: Float32Array;
  y: Float32Array;
  value: number;
}

export const preOrderTraversal = (
  node: Node,
  arr: NodeArr[] = []
): NodeArr[] => {
  if (node) {
    const n = node.children || [];
    arr.push({ x: node.x, y: node.y, value: node.value });
    preOrderTraversal(n[0], arr);
    preOrderTraversal(n[1], arr);
  }
  return arr;
};

export const postOrderTraversal = (
  node: Node,
  arr: NodeArr[] = []
): NodeArr[] => {
  if (node) {
    const n = node.children || [];
    postOrderTraversal(n[0], arr);
    postOrderTraversal(n[1], arr);
    arr.push({ x: node.x, y: node.y, value: node.value });
  }
  return arr;
};

export const inOrderTraversal = (
  node: Node,
  arr: NodeArr[] = []
): NodeArr[] => {
  if (node) {
    const n = node.children || [];
    inOrderTraversal(n[0], arr);
    arr.push({ x: node.x, y: node.y, value: node.value });
    inOrderTraversal(n[1], arr);
  }
  return arr;
};

export const breadthFirstTraversal = (node: Node): NodeArr[] => {
  let queue = [node];
  const arr: NodeArr[] = [];

  while (queue.length) {
    let currentNode = queue.shift();

    if (currentNode) {
      const n = currentNode.children || [];
      if (n[0]) {
        queue.push(currentNode.children[0]);
      }
      if (n[1]) {
        queue.push(currentNode.children[1]);
      }
      arr.push({
        x: currentNode.x,
        y: currentNode.y,
        value: currentNode.value
      });
    }
  }
  return arr;
};

export function diagonal(d: any) {
  return (
    "M" +
    d.source.x +
    "," +
    d.source.y +
    "C" +
    (d.source.x + d.target.x) / 2 +
    "," +
    d.source.y +
    " " +
    (d.source.x + d.target.x) / 2 +
    "," +
    d.target.y +
    " " +
    d.target.x +
    "," +
    d.target.y
  );
}
