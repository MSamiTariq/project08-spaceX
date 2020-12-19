import React from "react";
import { MissionsInfoQuery } from "../../generated/graphql";

interface Props {
	data: MissionsInfoQuery;
}

const MissionList: React.FC<Props> = ({ data }) => {
	return (
		<div>
			<ul>
				{data.launches?.map((launch, ind) => {
					return <li key={ind}>{launch?.mission_name}</li>;
				})}
			</ul>
		</div>
	);
};

export default MissionList;
