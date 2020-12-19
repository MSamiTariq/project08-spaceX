import React from "react";
import Lottie from "react-lottie";
import Grid from "@material-ui/core/Grid";
import Loadingdata from "../loading.json";

export default function Loading() {
	return (
		<Grid item xs={12}>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					// padding: "300px",
					height: "100vh",
					width: "100vw",
				}}
			>
				<Lottie
					options={{
						animationData: Loadingdata,
					}}
				/>
			</div>
		</Grid>
	);
}
