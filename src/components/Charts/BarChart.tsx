import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartProps } from '../../interfaces/chartTypes';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const BarChart: React.FC<Record<string, unknown>> | any = ({ dataS, color }: ChartProps) => {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const [data, setData] = useState({
    labels,
    datasets: [{
      label: 'Expenses by Month',
      data: dataS,
      backgroundColor: [
        'yellow',
        color,
        'white',
        'gainsboro',
      ],
      height: '79vh',
      borderColor: [
        'rgb(153, 102, 255)',
        color,
      ],
      borderWidth: 1,
    }],
  });

  return <Bar width="500px" height="900px" data={data} />;
};

export default BarChart;
