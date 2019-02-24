export interface Tree {
  value: string;
  children: Tree[];
}

export type Node = d3.HierarchyNode<{}> | Tree;

export type PointNode = d3.HierarchyPointNode<{}>;

export type PointLink = d3.HierarchyPointLink<{}>;

export type SelectChangeEvent = React.ChangeEvent<HTMLSelectElement>;
export interface TreeChartProps {
  data: Tree;
  parsed: PointNode[];
}

export interface AppState {
  traversing: boolean;
  tree: Node[];
}
