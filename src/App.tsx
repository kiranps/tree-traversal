import React, { Component, Fragment } from "react";
import * as d3 from "d3";
import TreeChart from "./TreeChart";
import { TREE_DATA } from "./constants";
import { Node } from "./types";
import {
  TreeBox,
  SelectionBox,
  Select,
  Option,
  TraversedList,
  Item,
  Button
} from "./Styled";

import {
  inOrderTraversal,
  preOrderTraversal,
  postOrderTraversal,
  breadthFirstTraversal
} from "./helper";

class App extends Component {
  root: any = d3.tree().size([320, 200])(d3.hierarchy(TREE_DATA));
  arr: Node[] = preOrderTraversal(this.root);
  traversal: any;
  chart: any;
  nodes: any;

  state = { traversing: false, tree: [] };

  handleChange = (e: any) => {
    let traversalType = e.target.value;

    switch (traversalType) {
      case "preorder":
        this.arr = preOrderTraversal(this.root);
        break;
      case "postorder":
        this.arr = postOrderTraversal(this.root);
        break;
      case "inorder":
        this.arr = inOrderTraversal(this.root);
        break;
      case "bft":
        this.arr = breadthFirstTraversal(this.root);
        break;
    }
  };

  toggleTraversal = () => {
    this.state.traversing ? this.stopTraversal() : this.startTraversal();
  };

  stopTraversal = () => {
    clearTimeout(this.traversal);
    this.setState({ traversing: false, tree: [] });
  };

  startTraversal = () => {
    this.setState({ traversing: true, tree: [] });
    this.animateTraversal(this.arr);
  };

  animateTraversal = (arr: any[]) => {
    if (arr.length > 0) {
      this.traversal = setTimeout(() => {
        this.setState({ tree: [...this.state.tree, arr[0]] });
        this.animateTraversal(arr.slice(1));
      }, 1500);
    }
  };

  render() {
    const { tree, traversing } = this.state;
    return (
      <Fragment>
        <TreeBox>
          <TreeChart data={TREE_DATA} parsed={tree} />
        </TreeBox>
        <SelectionBox>
          <Select onChange={this.handleChange}>
            <Option value="preorder">preorder</Option>
            <Option value="postorder">postorder</Option>
            <Option value="inorder">inorder</Option>
            <Option value="bft">bft</Option>
          </Select>
          <Button onClick={this.toggleTraversal}>
            {traversing ? "stop" : "start"}
          </Button>
          <TraversedList>
            {tree.map((x: any, i) => (
              <Item key={i}>{x.value}</Item>
            ))}
          </TraversedList>
        </SelectionBox>
      </Fragment>
    );
  }
}

export default App;
