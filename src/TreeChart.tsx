import React, { Component } from "react";
import * as d3 from "d3";
import { TREE_DATA } from "./constants";
import { preOrderTraversal, diagonal } from "./helper";
import { SVG, Text, Circle, Path, Translate } from "./Styled";

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

  render() {
    const lines = this.root.links().map(diagonal);
    const circles = this.root.descendants();
    console.log(circles);

    return (
      <SVG>
        <Translate>
          {lines.map((x: any, i: number) => (
            <Path key={i} d={x} />
          ))}
          {circles.map((x: any, i: number) => (
            <React.Fragment>
              <Circle key={i} cx={x.x} cy={x.y} />
              <Text dx={x.x - 7} dy={x.y + 4}>
                {x.value}
              </Text>
            </React.Fragment>
          ))}
        </Translate>
      </SVG>
    );
  }
}
