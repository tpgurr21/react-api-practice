import {Button} from "@mui/material";
import React, {SyntheticEvent, useState} from "react";

interface Props {
	showDetails: boolean;
	onClick: (e: React.SyntheticEvent) => void;
}

const LearnMore = ({showDetails, onClick}: Props) => {
	return (
		<Button
			variant="contained"
			color="secondary"
			sx={{mt: 2}}
			onClick={onClick}
		>
			{showDetails ? "Show less" : "Learn more"}
		</Button>
	);
};

export default LearnMore;
