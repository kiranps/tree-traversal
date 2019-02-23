import React, { PureComponent } from "react";
import * as d3 from "d3";
import { diagonal } from "./helper";
import { SVG, Text, Circle, Path, Translate } from "./Styled";

interface Node {
  value: string;
  children: Node[];
}

interface NodeParsed {
  x: Float32Array;
  y: Float32Array;
  value: number;
}
interface TreeChartProps {
  data: Node;
  parsed: NodeParsed[];
}

export default class TreeChart extends PureComponent<TreeChartProps> {
  root: any = d3.tree().size([320, 200])(d3.hierarchy(this.props.data));

  render() {
    const { parsed } = this.props;
    const lines = this.root.links().map(diagonal);
    const circles = this.root.descendants().map((x: any) => ({
      ...x,
      active: parsed.findIndex(d => d.x === x.x && d.y === x.y) >= 0
    }));

    return (
      <SVG>
        <Translate>
          {lines.map((x: any, i: number) => (
            <Path key={i} d={x} />
          ))}
          {circles.map((x: any, i: number) => (
            <React.Fragment key={i}>
              <Circle cx={x.x} cy={x.y} active={x.active} />
              <Text dx={x.x - 7} dy={x.y + 4} active={x.active}>
                {x.value}
              </Text>
            </React.Fragment>
          ))}
        </Translate>
      </SVG>
    );
  }
}
