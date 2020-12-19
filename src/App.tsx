import React from "react";
import "./App.css";
import MissionContainer from "./components/Mission/index";
import Header from "./components/Header";
import About from "./components/About";
import Landing from "./components/Landing";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="missionList" element={<MissionContainer />} />
				<Route path="about" element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
