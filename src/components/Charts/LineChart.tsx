import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Box } from '@chakra-ui/react';

import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
);

type LineChartProps = {
  dataS: number[];
  borderColor: string;
}
const LineChart: React.FC<{}> | any = ({dataS, borderColor}: LineChartProps) => {
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];
  const [data, setData] = useState({
    labels,
    datasets: [
      {
        label: 'Change in Portfolio   ',
        data: dataS,
        fill: false,
        borderColor: borderColor,
        tension: 0.1,
      },
    ],
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });

  return (
    <Box>
      <Line data={data} />
    </Box>
  );
};

export default LineChart;
