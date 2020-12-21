import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Header from "./components/Header";

describe("App Component renders", () => {
	let container = shallow(<App />);
	console.log(container.debug());
	it("should render a div", () => {
		expect(container.find("div").length).toEqual(1);
	});
	it("should render the Header component", () => {
		expect(container.containsMatchingElement(<Header />)).toEqual(true);
	});
	it("should contain routes tag", () => {
		expect(container.find("Routes").length).toEqual(1);
	});
	it("should contain routes tag", () => {
		expect(container.find("Routes").length).toEqual(3);
	});
});
