import {Box, Button, Container, Paper, Typography} from "@mui/material";
import React, { SyntheticEvent } from "react";

const serviceList = ["Service 1", "Service 2", "Service 3"];
const returnData = (e: SyntheticEvent) => {
	e.preventDefault();}
// 	const data = await axios.get
// }

// const onSearchSubmit = async (e: SyntheticEvent) => {
// 	e.preventDefault();
// 	const result = await searchCompanies(search);
// 	// setSearchResult(result.data); THIS WON'T WORK
// 	if (typeof result === "string") {
// 		setServerError(result);
// 	} else if (Array.isArray(result.data)) {
// 		setSearchResult(result.data);
// 	}
// 	console.log(searchResult);

// const searchCompanies = async (query: string) => {
// 	try {
// 		const data = await axios.get<SearchResponse>(
// 			`https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`
// 		);
// 		return data;
// 	} catch (error) {
// 		if (axios.isAxiosError(error)) {
// 			console.log("error message: ", error.message);
// 			return error.message;
// 		} else {
// 			console.log("unexpected error: ", error);
// 			return "An unexpected error has occurred.";
// 		}
// 	}
// };




type Props = {};

const Services = (props: Props) => {
	return (
		<Container>
			<Typography
				variant="h1"
				sx={{my: 4, textAlign: "center", color: "primary.main"}}
			>
				Services
			</Typography>
			<Typography variant="h2">Overview</Typography>
			<Box
				sx={{
					pt: 4,
					display: "flex",
					flexDirection: {xs: "column", md: "row"},
					justifyContent: "space-between",
					gap: 4,
				}}
			>
				{serviceList.map((service) => (
					<Paper elevation={3} sx={{width: {xs: 1, md: 320}}}>
						<Box sx={{m: 3}}>
							<Typography variant="h3">{service}</Typography>
							<Typography sx={{mt: 2}}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Doloremque quibusdam nostrum, excepturi repudiandae qui maxime
								similique ut ducimus, veniam facilis nihil recusandae odio iure
								laboriosam cumque alias in commodi aliquid.
							</Typography>
							<Button variant="contained" color="secondary" sx={{mt: 2}} onClick={returnData}>
								Learn more
							</Button>
						</Box>
					</Paper>
				))}
			</Box>
		</Container>
	);
};

export default Services;
