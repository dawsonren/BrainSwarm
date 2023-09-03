import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import socket from './socket';

// in the future, use tree-shaking to reduce bundle size - https://react-chartjs-2.js.org/docs/migration-to-v4/#tree-shaking
import 'chart.js/auto';

const Histogram: React.FC = () => {
  const [histogramData, setHistogramData] = useState<number[]>(Array(6).fill(0));

  useEffect(() => {
    socket.on('roll', (diceValue: number) => {
      const updatedHistogram = [...histogramData];
      updatedHistogram[diceValue - 1] += 1;
      setHistogramData(updatedHistogram);
    });
  }, [histogramData]);

  const chartData = {
    labels: ['1', '2', '3', '4', '5', '6'], // These are category labels
    datasets: [
      {
        label: 'Dice Roll Histogram',
        data: histogramData,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Dice Roll Value',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Frequency',
        },
      },
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
};

export default Histogram;
