// components/BarChart.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
  dataString: string;
  number: string;
}

const BarChart: React.FC<BarChartProps> = ({ dataString, number }) => {
  // Parse the string into an array of numbers
  const dataArray = dataString.split(' ').map((num) => parseInt(num, 10));

  // Define the chart data
  const data = {
    labels: dataArray.map((_, index) => `I-${index + 1}`), // Label each bar with "I-1", "I-2", etc.
    datasets: [
      {
        label: 'Siffran - ' + number,
        data: dataArray,
        backgroundColor: 'rgb(118, 56, 121)',
        borderColor: 'rgb(23, 7, 24)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options (you can customize this further) //Incompatible
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Frånvaro statistik',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
