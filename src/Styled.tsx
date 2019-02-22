import styled from "styled-components";

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
  margin: 20px auto;
  padding: 5px;
  border: 1px solid #d6d6d6;
  color: #5f5f5f;
`;

const Option = styled.option`
  color: #5f5f5f;
`;

const TraversedList = styled.div``;

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
  border: 1px solid #d6d6d6;
  color: #5f5f5f;
  background-color: #fff;
  border-radius: 3px;
  height: 50px;
`;

export { TreeBox, SelectionBox, Select, Option, TraversedList, Item, Button };
