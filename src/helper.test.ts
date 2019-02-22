import {
  inOrderTraversal,
  postOrderTraversal,
  preOrderTraversal,
  breadthFirstTraversal
} from "./helper";
import { TREE_DATA } from "./constants";

it("should return array in inorder", () => {
  const data = inOrderTraversal(TREE_DATA).map(x => x.value);
  expect(data).toEqual(["12", "23", "16", "04", "09", "34", "92"]);
});

it("should return array in postorder", () => {
  const data = postOrderTraversal(TREE_DATA).map(x => x.value);
  expect(data).toEqual(["12", "16", "09", "04", "23", "92", "34"]);
});

it("should return array in preorder", () => {
  const data = preOrderTraversal(TREE_DATA).map(x => x.value);
  expect(data).toEqual(["34", "23", "12", "04", "16", "09", "92"]);
});

it("should return array in bft", () => {
  const data = breadthFirstTraversal(TREE_DATA).map(x => x.value);
  expect(data).toEqual(["34", "23", "92", "12", "04", "16", "09"]);
});
