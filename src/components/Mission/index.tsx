import React from "react";
import { useMissionsInfoQuery } from "../../generated/graphql";
import MissionList from "./MissionList";
import OppositeContentTimeline from "./Timeline";
import Loading from "../Loading";

const MissionContainer = () => {
	const { data, error, loading } = useMissionsInfoQuery();
	console.log(data);

	if (loading || !data) {
		return <Loading />;
	}
	return (
		<div>
			<OppositeContentTimeline data={data} />
		</div>
	);
};

export default MissionContainer;
