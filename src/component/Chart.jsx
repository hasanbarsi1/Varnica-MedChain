import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PatientDataChart = () => {
  // Static chart data
  const data = {
    labels: ['Admitted Patients', 'Discharged Patients', 'Critical Patients'],
    datasets: [
      {
        label: 'Patient Data',
        data: [300, 200, 50], // Sample values for each category
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)', // Admitted
          'rgba(75, 192, 192, 0.6)', // Discharged
          'rgba(255, 99, 132, 0.6)', // Critical
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
        hoverOffset: 10, // Adds a hover effect for better interaction
      },
    ],
  };

  // Static chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw} patients`;
          },
        },
      },
      title: {
        display: true,
        text: 'Patient Data Overview',
      },
    },
    cutout: '70%', // Makes it look like a circular bar chart
  };

  return <Doughnut data={data} options={options} />;
};

export default PatientDataChart;



