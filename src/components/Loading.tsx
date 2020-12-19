import React from "react";
import Lottie from "react-lottie";
import Loadingdata from "../loading.json";

export default function Loading() {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				// padding: "300px",
				height: "50vh",
				width: "50vw",
			}}
		>
			<Lottie
				options={{
					animationData: Loadingdata,
				}}
			/>
		</div>
	);
}
