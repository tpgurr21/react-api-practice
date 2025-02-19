import {Box, Button, Collapse, Paper, Typography} from "@mui/material";
import React, {SyntheticEvent, useState} from "react";
import LearnMore from "../Buttons/LearnMore";
import { fetchServices } from "../../api";


interface Props {
	id: number; //
	title: string;
	body: string;
	// onLearnMore: (e: React.SyntheticEvent) => void;
}

// const returnData = (e: SyntheticEvent) => {
// 	e.preventDefault();

// };

const ServiceTile = ({
	id,
	title,
	body,
}: //  onLearnMore
Props) => {
	const [showDetails, setShowDetails] = useState(false);

	const returnData = (e: SyntheticEvent) => {
		e.preventDefault();
		setShowDetails((prev) => !prev);
	};
	return (
		<Paper elevation={3} sx={{width: {xs: 1, md: 320}}}>
			<Box sx={{m: 3}}>
				<Typography variant="h3">Service {id}</Typography>
				<Collapse in={showDetails}>
					<Typography sx={{mt: 2}}>{title}</Typography>
				</Collapse>
				{/* <Button
					variant="contained"
					color="secondary"
					sx={{mt: 2}}
					onClick={returnData}
				>
					{showDetails ? "Show less" : "Learn more"}
				</Button> */}
				<LearnMore showDetails={showDetails} onClick={returnData} />
			</Box>
			{/* <Box sx={{m: 3}}>
				<Typography variant="h3">{title}</Typography>
				<Typography sx={{mt: 2}}>{body}</Typography>
				<Button
					variant="contained"
					color="secondary"
					sx={{mt: 2}}
					onClick={onLearnMore}
				>
					Learn more
				</Button>
			</Box> */}
		</Paper>
	);
};

export default ServiceTile;
