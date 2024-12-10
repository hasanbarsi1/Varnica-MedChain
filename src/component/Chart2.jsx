import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const MedicalBarChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Example months
    datasets: [
      {
        label: 'Patients',
        data: [50, 75, 60, 80, 95, 100], // Example data points
        backgroundColor: 'rgba(54, 162, 235, 0.6)', // Bar color
        borderColor: 'rgba(54, 162, 235, 1)', // Bar border
        borderWidth: 1,
        barPercentage: 0.6, // Adjust bar width
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensure it fits the parent container
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    //   title: {
    //     display: true,
    //     text: 'Monthly Patient Data',
    //   },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide vertical gridlines
        },
      },
      y: {
        grid: {
          display: true,
        },
        ticks: {
          stepSize: 20, // Customize y-axis increments
        },
      },
    },
  };

  return (
    <div style={{ width: '300px', height: '40vh' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default MedicalBarChart;
