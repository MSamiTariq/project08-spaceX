import React from "react";
import { shallow } from "enzyme";
import OppositeContentTimeline from "./Timeline";

describe("App Component renders", () => {
	let container = shallow(<OppositeContentTimeline />);
	it("should render a div", () => {
		expect(container.find("div").length).toEqual(1);
	});
});
