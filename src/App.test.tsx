import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import App from "./App";

jest.useFakeTimers();

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should match with snapshot", () => {
  const component = mount(<App />);
  expect(component).toMatchSnapshot();
});

it("should render Tree diagram", () => {
  const component = mount(<App />);
  expect(component.find("Tree").length).toEqual(1);
});

it("should animate the tree in inorder", () => {
  const inorder = ["12", "23", "16", "4", "9", "34", "92"];
  const component = mount(<App />);
  component.find("Select").simulate("change", { target: { value: "inorder" } });
  component.find("Button").simulate("click");
  jest.runAllTimers();
  component.update();
  inorder.forEach((x, i) => {
    expect(
      component
        .find("Item")
        .at(i)
        .text()
    ).toEqual(inorder[i]);
  });
});

it("should animate tree in postorder", () => {
  const postorder = ["12", "16", "9", "4", "23", "92", "34"];
  const component = mount(<App />);
  component
    .find("Select")
    .simulate("change", { target: { value: "postorder" } });
  component.find("Button").simulate("click");
  jest.runAllTimers();
  component.update();
  postorder.forEach((x, i) => {
    expect(
      component
        .find("Item")
        .at(i)
        .text()
    ).toEqual(postorder[i]);
  });
});

it("should animate tree in preorder", () => {
  const preorder = ["34", "23", "12", "4", "16", "9", "92"];
  const component = mount(<App />);
  component
    .find("Select")
    .simulate("change", { target: { value: "preorder" } });
  component.find("Button").simulate("click");
  jest.runAllTimers();
  component.update();
  preorder.forEach((x, i) => {
    expect(
      component
        .find("Item")
        .at(i)
        .text()
    ).toEqual(preorder[i]);
  });
});

it("should animate tree in bft", () => {
  const bft = ["34", "23", "92", "12", "4", "16", "9"];
  const component = mount(<App />);
  component.find("Select").simulate("change", { target: { value: "bft" } });
  component.find("Button").simulate("click");
  jest.runAllTimers();
  component.update();
  bft.forEach((x, i) => {
    expect(
      component
        .find("Item")
        .at(i)
        .text()
    ).toEqual(bft[i]);
  });
});
