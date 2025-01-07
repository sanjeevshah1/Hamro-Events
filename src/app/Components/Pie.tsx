// components/PieChart.js
"use client"

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useState, useEffect } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ dataValues }: {dataValues:number[]}) => {
  const [chartData, setChartData] = useState({
    labels: ['Logged in', 'Not Logged in'],
    datasets: [
      {
        data: dataValues,
        backgroundColor: ['#EF4444', '#3B82F6'],
        hoverOffset: 4,
      },
    ],
  });

  useEffect(() => {
    if (dataValues) {
      setChartData((prev) => ({
        ...prev,
        datasets: [{ ...prev.datasets[0], data: dataValues }],
      }));
    }
  }, [dataValues]);

  return (
    <div className="w-full h-56 flex flex-col items-center mb-4 lg:h-80 lg:my-10">
      <Pie data={chartData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }}    />
    </div>
  );
};

export default PieChart;
