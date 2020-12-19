import gql from "graphql-tag";

export const MissionsInfo = gql`
	query MissionsInfo {
		launches {
			mission_id
			mission_name
			launch_year
			launch_success
			launch_date_utc
			links {
				article_link
				wikipedia
				video_link
			}
		}
	}
`;
