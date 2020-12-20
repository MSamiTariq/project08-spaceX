import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Header from "./components/Header";

describe("App Component renders", () => {
	let container = shallow(<App />);
	it("should render a div", () => {
		expect(container.find("div").length).toEqual(1);
	});
	it("should render the Header component", () => {
		expect(container.containsMatchingElement(<Header />)).toEqual(true);
	});
});
