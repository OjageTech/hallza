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
import { ChartProps } from '../../interfaces/chartTypes';

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

const LineChart: React.FC<Record<string, unknown>> | any = ({
  dataS,
  borderColor, w, h,
}: ChartProps) => {
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
        borderColor,
        tension: 0.5,
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
