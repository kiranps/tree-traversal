import React, { Component, Fragment } from "react";
import * as d3 from "d3";
import { TREE_DATA } from "./constants";
import {
  TreeBox,
  SelectionBox,
  Select,
  Option,
  TraversedList,
  Item,
  Button,
  Tree
} from "./Styled";

import {
  diagonal,
  inOrderTraversal,
  preOrderTraversal,
  postOrderTraversal,
  breadthFirstTraversal
} from "./helper";

import TreeChart from "./TreeChart";

class App extends Component {
  root: any;
  traversal: any;
  arr: any;
  chart: any;
  nodes: any;
  constructor(props: any) {
    super(props);
    const treeLayout = d3.tree().size([320, 200]);
    const root = d3.hierarchy(TREE_DATA);
    treeLayout(root);
    this.root = root;
    this.arr = preOrderTraversal(this.root);
    this.chart = React.createRef();
  }

  state = { traversing: false, tree: [] };

  componentDidMount() {
    const chart = d3
      .select(this.chart.current)
      .append("g")
      .attr("transform", "translate(-70, 30)");

    chart
      .append("g")
      .selectAll("path")
      .data(this.root.links())
      .enter()
      .append("path")
      .attr("d", (d: any) => diagonal(d))
      .attr("fill", "none")
      .attr("stroke", "#555")
      .attr("stroke-opacity", 0.4)
      .attr("stroke-width", "1.5px");

    const nodes = chart
      .append("g")
      .selectAll("circle")
      .data(this.root.descendants())
      .enter()
      .append("g");

    // circle
    nodes
      .append("circle")
      .attr("stroke", "#555")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", "3px")
      .attr("fill", "#fff")
      .attr("cx", (d: any) => d.x)
      .attr("cy", (d: any) => d.y)
      .attr("r", 15);

    // text
    nodes
      .append("text")
      .attr("dx", (d: any) => d.x - 7)
      .attr("dy", (d: any) => d.y + 4)
      .attr("font-size", "12px")
      .attr("fill", "#5f5f5f")
      .text((d: any) => d.value);
  }

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

  resetNodes = () => {
    d3.select(this.chart.current)
      .selectAll("circle")
      .attr("fill", "#fff")
      .attr("stroke", "#555");

    d3.select(this.chart.current)
      .selectAll("text")
      .attr("fill", "#5f5f5f");
  };

  toggleTraversal = () => {
    this.state.traversing ? this.stopTraversal() : this.startTraversal();
  };

  stopTraversal = () => {
    clearTimeout(this.traversal);
    this.resetNodes();
    this.setState({ traversing: false, tree: [] });
  };

  startTraversal = () => {
    this.resetNodes();
    this.setState({ traversing: true, tree: [] });
    this.animateTraversal(this.arr);
  };

  animateTraversal = (arr: any[]) => {
    if (arr.length > 0) {
      this.traversal = setTimeout(() => {
        const x = arr[0];
        this.setState({ tree: [...this.state.tree, x.value] });
        d3.select(this.chart.current)
          .selectAll("circle")
          .filter((d: any) => x.x === d.x && x.y === d.y)
          .attr("fill", "#2196F3")
          .attr("stroke", "#2196F3");

        d3.select(this.chart.current)
          .selectAll("text")
          .filter((d: any) => x.x === d.x && x.y === d.y)
          .attr("fill", "#fff");

        this.animateTraversal(arr.slice(1));
      }, 1000);
    }
  };

  render() {
    const { tree, traversing } = this.state;
    return (
      <Fragment>
        <TreeBox>
          <TreeChart />
          {/* <Tree ref={this.chart} /> */}
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
            {tree.map((x, i) => (
              <Item key={i}>{x}</Item>
            ))}
          </TraversedList>
        </SelectionBox>
      </Fragment>
    );
  }
}

export default App;
