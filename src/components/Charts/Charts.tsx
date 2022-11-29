// import { ChartData } from 'chart.js';
// import { useState, useEffect } from 'react';
import axios from 'axios';
// import { Line } from 'react-chartjs-2';

// const Charts = () => {
// 	const [data, setData] = useState<ChartData[]>([]);

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			const result = await axios(
// 				'https://api.coindesk.com/v1/bpi/historical/close.json'
// 			);

// 			const chartData: ChartData[] = [];
// 			for (const date in result.data.bpi) {
// 				chartData.push({
// 					date: new Date(date),
// 					price: result.data.bpi[date],
// 				});
// 			}
// 			setData(chartData);
// 		};

// 		fetchData();
// 	}, []);

// 	return (
// 		<div>
// 			<LineChart width={600} height={300} data={data}>
// 				<Line type="monotone" dataKey="price" stroke="#8884d8" />
// 				<CartesianGrid stroke="#ccc" />
// 				<XAxis dataKey="date" />
// 				<YAxis />
// 			</LineChart>
// 		</div>
// 	);
// };

// export default Charts;
