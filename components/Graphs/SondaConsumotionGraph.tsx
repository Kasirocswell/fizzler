// components/Graphs/SodaConsumptionGraph.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const SodaConsumptionGraph = () => {
  const data = {
    labels: ['2010', '2015', '2020', '2021'],
    datasets: [
      {
        label: 'Soda Consumption (in billions)',
        data: [50, 45, 30, 20],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default SodaConsumptionGraph;
