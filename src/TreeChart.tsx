import React from "react";
import * as d3 from "d3";
import { diagonal } from "./helper";
import { SVG, Text, Circle, Path, Translate } from "./Styled";
import { TreeChartProps, PointNode } from "./types";

const TreeChart = ({ data, parsed }: TreeChartProps) => {
  const root = d3.tree().size([320, 200])(d3.hierarchy(data));
  const lines = root.links().map(diagonal);
  const circles = root.descendants().map((x: PointNode) => ({
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
};

export default TreeChart;
