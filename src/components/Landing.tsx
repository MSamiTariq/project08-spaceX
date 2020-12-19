import React from "react";
import "./Landing.modules.css";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

export default function Landing() {
	return (
		<div className="landing-page-container">
			<div className="content" id="home-section">
				<h1>
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString("Welcome to SpaceX. SpaceX Launches")
								.callFunction(() => {
									console.log("String typed out!");
								})
								.pauseFor(2500)
								.deleteAll()
								.callFunction(() => {
									console.log("All strings were deleted");
								})
								.start();
						}}
					/>
				</h1>
				<p>
					SpaceX designs, manufactures and launches advanced rockets and
					spacecraft. The company was founded in 2002 to revolutionize space
					technology, with the ultimate goal of enabling people to live on other
					planets.
				</p>

				<Link className="launches-btn" to="missionList">
					Launches
				</Link>
			</div>
		</div>
	);
}
