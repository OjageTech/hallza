// import the required modules
import React, { useState, useEffect } from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';
import Box from './common/Box';
import supabase from '../supabaseClient';

// define the FeaturedVenues component
const FeaturedVenues: React.FC = () => {
	// create state variables to store the featured venues and a loading flag
	const [featuredVenues, setFeaturedVenues] = useState<
		object[] | null
	>([]);
	const [isLoading, setIsLoading] = useState(true);

	// use the useEffect hook to fetch the featured venues from the database
	useEffect(() => {
		const fetchData = async () => {
			// use the Supabase client to fetch the featured venues from the database

			let { data: venues, error } = await supabase
				.from('venues')
				.select('*');
			setFeaturedVenues(venues);
			setIsLoading(false);
		};
		fetchData();
		console.log(featuredVenues);
	}, []);

	// render a loading spinner if the featured venues are still being fetched
	if (isLoading) {
		return <div>Loading...</div>;
	}
	// console.log(FeaturedVenues)
	// render the featured venues
	return (
		<div>
			<Text
				as="h3"
				fontSize={{
					base: '.7rem',
					md: '.95rem',
					lg: '1rem',
					xl: '2.4rem',
				}}
				fontWeight={300}
				lineHeight={{
					base: '1rem',
					md: '1.5rem',
					lg: '2rem',
					xl: '3.1rem',
				}}>
				Featured Venues
			</Text>
			<Flex flexWrap="wrap">
				{/* {featuredVenues?.map((venue) => (
				<Box key={venue.id} p={5} width={[1 / 2, 1 / 3, 1 / 4]}>
					<Image src={venue.image_url} alt={venue.name} />
					<Text fontSize="lg" fontWeight="bold" my={2}>
						{venue.name}
					</Text>
					<Text>Capacity: {venue.capacity}</Text>
					<Text>Price: ${venue.price}</Text>
					<Text>Rating: {venue.rating}</Text>
				</Box>
			))} */}
			</Flex>
		</div>
	);
};

export default FeaturedVenues;
