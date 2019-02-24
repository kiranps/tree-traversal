export interface Tree {
  value: string;
  children: Tree[];
}

export type Node = d3.HierarchyNode<{}> | Tree;

export type PointNode = d3.HierarchyPointNode<{}>;

export interface TreeChartProps {
  data: Tree;
  parsed: PointNode[];
}
