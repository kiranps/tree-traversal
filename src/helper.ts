import { Node } from "./types";

const LEFT = 0;
const RIGHT = 1;

export const preOrderTraversal = (node: Node, arr: Node[] = []): Node[] => {
  if (node) {
    const n = node.children || [];
    arr.push(node);
    preOrderTraversal(n[LEFT], arr);
    preOrderTraversal(n[RIGHT], arr);
  }
  return arr;
};

export const postOrderTraversal = (node: Node, arr: Node[] = []): Node[] => {
  if (node) {
    const n = node.children || [];
    postOrderTraversal(n[LEFT], arr);
    postOrderTraversal(n[RIGHT], arr);
    arr.push(node);
  }
  return arr;
};

export const inOrderTraversal = (node: Node, arr: Node[] = []): Node[] => {
  if (node) {
    const n = node.children || [];
    inOrderTraversal(n[LEFT], arr);
    arr.push(node);
    inOrderTraversal(n[RIGHT], arr);
  }
  return arr;
};

export const breadthFirstTraversal = (node: Node): Node[] => {
  let queue = [node];
  const arr: Node[] = [];

  while (queue.length) {
    let currentNode = queue.shift();

    if (currentNode) {
      const n = currentNode.children || [];
      if (n[LEFT]) {
        queue.push(n[LEFT]);
      }
      if (n[RIGHT]) {
        queue.push(n[RIGHT]);
      }
      arr.push(currentNode);
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
