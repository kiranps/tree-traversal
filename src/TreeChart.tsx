import React, { Component } from "react";
import * as d3 from "d3";
import { TREE_DATA } from "./constants";
import { preOrderTraversal, diagonal } from "./helper";

export default class TreeChart extends Component {
  root: any;
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

    this.nodes = chart
      .append("g")
      .selectAll("circle")
      .data(this.root.descendants())
      .enter()
      .append("g");

    this.nodes
      .append("circle")
      .attr("stroke", "#555")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", "3px")
      .attr("fill", "#fff")
      .attr("cx", (d: any) => d.x)
      .attr("cy", (d: any) => d.y)
      .attr("r", 15);

    // text
    this.nodes
      .append("text")
      .attr("dx", (d: any) => d.x - 7)
      .attr("dy", (d: any) => d.y + 4)
      .attr("font-size", "12px")
      .attr("fill", "#5f5f5f")
      .text((d: any) => d.value);
    // links
  }

  componentDidUpdate(prevProps: any) {}

  changeColorOfNodes = () => {
    const x: any = {};

    d3.select(this.nodes)
      .selectAll("circle")
      .filter((d: any) => x.x === d.x && x.y === d.y)
      .attr("fill", "#2196F3")
      .attr("stroke", "#2196F3");

    d3.select(this.nodes)
      .selectAll("text")
      .filter((d: any) => x.x === d.x && x.y === d.y)
      .attr("fill", "#fff");
  };

  resetNodes = () => {
    d3.select(this.nodes)
      .selectAll("circle")
      .attr("fill", "#fff")
      .attr("stroke", "#555");

    d3.select(this.nodes)
      .selectAll("text")
      .attr("fill", "#5f5f5f");
  };

  render() {
    return <svg width="200" height="260" ref={this.chart} />;
  }
}
