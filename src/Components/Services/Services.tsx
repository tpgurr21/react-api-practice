import {Box, Button, Container, Paper, Typography} from "@mui/material";
import React, {SyntheticEvent, useState, useEffect} from "react";
import ServiceTile from "../Tiles/ServiceTile";
import { fetchServices } from "../../api";



interface Service {
	id: number;
	title: string;
	body: string;
}

const Services = () => {
	const [services, setServices] = useState<Service[]>([]);

	useEffect(() => {
		const getServices = async () => {
			const data = await fetchServices();
			setServices(data);
		};
		getServices();
	}, []);

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
				
				{services.slice(0, 3).map((service) => (
					<ServiceTile
						key={service.id}
						id={service.id}
						title={service.title}
						body={service.body}
						// onLearnMore={returnData}
					/>
				))}
				{/* {services.length > 3 && services[3] && (
					<ServiceTile
						key={services[3].id}
						id={services[3].id}
						title={services[3].title}
						body={services[3].body}
					/>
				)} */}
			</Box>
			{/* {services.map((service) => (
				<div key={service.id}> {service.id}. {service.title} </div>
			))} */}
		</Container>
	);
};

export default Services;
