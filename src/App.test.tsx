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

it("should render Tree Chart", () => {
  const component = mount(<App />);
  expect(component.find("TreeChart").length).toEqual(1);
});

it("should render Seven Circles", () => {
  const component = mount(<App />);
  expect(component.find("Circle").length).toEqual(7);
});

it("should render Six Paths", () => {
  const component = mount(<App />);
  expect(component.find("Path").length).toEqual(6);
});

it("should animate the tree in inorder", () => {
  const inorder = ["12", "23", "16", "4", "9", "34", "92"];
  const component = mount(<App />);
  component.find("Select").simulate("change", { target: { value: "inorder" } });
  component.find("Button").simulate("click");
  inorder.forEach((x, i) => {
    jest.advanceTimersByTime(1500);
    component.update();
    expect(
      component
        .find("Text")
        .filterWhere(n => n.props().active)
        .map(x => x.text())
        .sort()
    ).toEqual(inorder.slice(0, i + 1).sort());
  });
});

it("should animate the tree in postorder", () => {
  const postorder = ["12", "16", "9", "4", "23", "92", "34"];
  const component = mount(<App />);
  component
    .find("Select")
    .simulate("change", { target: { value: "postorder" } });
  component.find("Button").simulate("click");
  postorder.forEach((x, i) => {
    jest.advanceTimersByTime(1500);
    component.update();
    expect(
      component
        .find("Text")
        .filterWhere(n => n.props().active)
        .map(x => x.text())
        .sort()
    ).toEqual(postorder.slice(0, i + 1).sort());
  });
});

it("should animate the tree in preorder", () => {
  const preorder = ["34", "23", "12", "4", "16", "9", "92"];
  const component = mount(<App />);
  component
    .find("Select")
    .simulate("change", { target: { value: "preorder" } });
  component.find("Button").simulate("click");
  preorder.forEach((x, i) => {
    jest.advanceTimersByTime(1500);
    component.update();
    expect(
      component
        .find("Text")
        .filterWhere(n => n.props().active)
        .map(x => x.text())
        .sort()
    ).toEqual(preorder.slice(0, i + 1).sort());
  });
});

it("should animate the tree in bft", () => {
  const bft = ["34", "23", "92", "12", "4", "16", "9"];
  const component = mount(<App />);
  component.find("Select").simulate("change", { target: { value: "bft" } });
  component.find("Button").simulate("click");
  bft.forEach((x, i) => {
    jest.advanceTimersByTime(1500);
    component.update();
    expect(
      component
        .find("Text")
        .filterWhere(n => n.props().active)
        .map(x => x.text())
        .sort()
    ).toEqual(bft.slice(0, i + 1).sort());
  });
});

it("should animate the traverse list in inorder", () => {
  const inorder = ["12", "23", "16", "4", "9", "34", "92"];
  const component = mount(<App />);
  component.find("Select").simulate("change", { target: { value: "inorder" } });
  component.find("Button").simulate("click");
  inorder.forEach((x, i) => {
    jest.advanceTimersByTime(1500);
    component.update();
    expect(
      component
        .find("Item")
        .at(i)
        .text()
    ).toEqual(inorder[i]);
  });
});

it("should animate traverse list in postorder", () => {
  const postorder = ["12", "16", "9", "4", "23", "92", "34"];
  const component = mount(<App />);
  component
    .find("Select")
    .simulate("change", { target: { value: "postorder" } });
  component.find("Button").simulate("click");
  postorder.forEach((x, i) => {
    jest.advanceTimersByTime(1500);
    component.update();
    expect(
      component
        .find("Item")
        .at(i)
        .text()
    ).toEqual(postorder[i]);
  });
});

it("should animate traverse list in preorder", () => {
  const preorder = ["34", "23", "12", "4", "16", "9", "92"];
  const component = mount(<App />);
  component
    .find("Select")
    .simulate("change", { target: { value: "preorder" } });
  component.find("Button").simulate("click");
  preorder.forEach((x, i) => {
    jest.advanceTimersByTime(1500);
    component.update();
    expect(
      component
        .find("Item")
        .at(i)
        .text()
    ).toEqual(preorder[i]);
  });
});

it("should animate traverse list in bft", () => {
  const bft = ["34", "23", "92", "12", "4", "16", "9"];
  const component = mount(<App />);
  component.find("Select").simulate("change", { target: { value: "bft" } });
  component.find("Button").simulate("click");
  bft.forEach((x, i) => {
    jest.advanceTimersByTime(1500);
    component.update();
    expect(
      component
        .find("Item")
        .at(i)
        .text()
    ).toEqual(bft[i]);
  });
});
