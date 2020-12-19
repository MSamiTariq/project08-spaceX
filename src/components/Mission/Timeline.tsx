import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { GoRocket } from "react-icons/go";
import { FaWikipediaW } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiArticleFill } from "react-icons/ri";
import "./Timeline.modules.css";

export default function OppositeContentTimeline({ data }: any) {
	const useStyles = makeStyles((theme) => ({
		paper: {
			padding: "6px 16px",
		},
		secondaryTail: {
			backgroundColor: theme.palette.secondary.main,
		},
	}));

	const classes = useStyles();

	return (
		<Grid item xs={12}>
			<div style={{ paddingTop: "100px" }}>
				<React.Fragment>
					<Timeline align="alternate">
						{data.launches.map((launch: any, ind: number) => {
							return (
								<TimelineItem>
									<TimelineOppositeContent>
										<Typography
											variant="body2"
											color="textSecondary"
											style={{ color: "white", fontSize: "20px" }}
										>
											{launch.launch_date_utc}
										</Typography>
									</TimelineOppositeContent>
									<TimelineSeparator>
										<TimelineDot>
											<GoRocket />
										</TimelineDot>
										<TimelineConnector />
									</TimelineSeparator>
									<TimelineContent>
										<Paper elevation={3} className={classes.paper}>
											<Typography variant="h6" component="h1">
												{launch.mission_name}
											</Typography>
											<br />
											<FaWikipediaW
												className="icon"
												onClick={() => {
													window.open(`${launch.links.wikipedia}`);
												}}
											/>
											<FaYoutube
												className="icon"
												onClick={() => {
													window.open(`${launch.links.video_link}`);
												}}
											/>
											<RiArticleFill
												className="icon"
												onClick={() => {
													window.open(`${launch.links.article_link}`);
												}}
											/>
										</Paper>
									</TimelineContent>
								</TimelineItem>
							);
						})}
					</Timeline>
				</React.Fragment>
			</div>
		</Grid>
	);
}
