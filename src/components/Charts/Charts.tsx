import { useState } from 'react';
// import { Line } from 'react-chartjs-2';
import { Box } from '@chakra-ui/react';

const Chart = () => {
	const [data, setData] = useState({
		labels: ['1', '2', '3', '4', '5'],
		datasets: [
			{
				label: 'Videos Made',
				backgroundColor: 'rgba(255,0,255,0.75)',
				data: [4, 5, 1, 10, 32, 2, 12],
			},
			{
				label: 'Subscriptions',
				backgroundColor: 'rgba(0,255,0,0.75)',
				data: [14, 15, 21, 0, 12, 4, 2],
			},
		],
	});
	return (
		<Box position="relative" w={600} height={550} bg="secondary" >
			<h3>Chart Samples</h3>
			{/* <Line
				options={{
					responsive: true,
				}}
				data={data}
			/> */}
		</Box>
	);
};
export default Chart;
