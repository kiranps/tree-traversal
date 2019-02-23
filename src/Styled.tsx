import styled from "styled-components/macro";

const TreeBox = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 50%;
  text-align: center;
  padding-top: 14%;
`;

const SelectionBox = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 50%;
  background-color: #eee;
  text-align: center;
  padding-top: 20%;
`;

const Select = styled.select`
  width: 200px;
  height: 40px;
  text-align: center;
  background-color: #fff;
  outline: none;
  margin: 10px auto;
  padding: 5px 10px;
  border: 1px solid #d6d6d6;
  color: #5f5f5f;
`;

const Option = styled.option`
  color: #5f5f5f;
`;

const TraversedList = styled.div`
  margin-top: 10px;
`;

const Item = styled.div`
  display: inline-block;
  height: 50px;
  width: 50px;
  border: 1px solid #d6d6d6;
  margin-right: 5px;
  background-color: #fff;
  line-height: 48px;
  border-radius: 2px;
  font-size: 15px;
  color: #5f5f5f;
`;

const Button = styled.button`
  margin-left: 10px;
  border: 1px solid #d6d6d6;
  color: #5f5f5f;
  background-color: #fff;
  border-radius: 3px;
  height: 40px;
  cursor: pointer;
  outline: none;
  min-width: 100px;
  user-select: none;
`;

const Tree = styled.svg`
  width: 200px;
  height: 260px;
`;

const SVG = styled.svg`
  width: 200px;
  height: 260px;
`;

const Path = styled.path`
  fill: none;
  stroke: #555;
  stroke-width: 1.5px;
  stroke-opacity: 0.5;
`;

const Text = styled.text`
  font-size: 12px;
  fill: #5f5f5f;
`;

const Circle = styled.circle`
  fill: #fff;
  stroke: #555;
  stroke-width: 3px;
  stroke-opacity: 0.6;
  r: 15;
`;

const Translate = styled.g`
  transform: translate(-70px, 30px);
`;

export {
  TreeBox,
  Tree,
  SelectionBox,
  Select,
  Option,
  TraversedList,
  Item,
  Button,
  SVG,
  Text,
  Path,
  Circle,
  Translate
};
