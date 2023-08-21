import React from 'react'
import data from '../data.json'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);


const titleTooltip = (e) => `$${e[0].formattedValue}`;
const labelTooltip = (e) => "";
const options = {
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawTicks: false,
          drawBorder: false,
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        yAlign: "bottom",
        displayColors: false,
        callbacks: {
          title: titleTooltip,
          label: labelTooltip,
        },
      },
    },
  };


const dataLabel = data.map(data => data.day)
const dataSets = data.map(data => data.amount)

export const dataGraph = {
  labels: dataLabel,
  datasets: [
    {
      data: dataSets,
      backgroundColor: [      
      'hsl(10, 79%, 65%)',
      'hsl(10, 79%, 65%)',
      'hsl(186, 34%, 60%)',
      'hsl(10, 79%, 65%)',
      'hsl(10, 79%, 65%)',
      'hsl(10, 79%, 65%)',
      'hsl(10, 79%, 65%)',
    ],
      borderRadius: 5,
      hoverBackgroundColor: [
        'hsl(10, 79%, 73%)',
        'hsl(10, 79%, 73%)',
        'hsl(186, 34%, 80%)',
        'hsl(10, 79%, 73%)',
        'hsl(10, 79%, 73%)',
        'hsl(10, 79%, 73%)',
        'hsl(10, 79%, 73%)',
      ],
    }
  ]
};

function Hero() {
  return (
    <div className='hero-container'>
      <p className='hero-title'>Spending - Last 7 days</p>
      <div className="hero-graph">
        <Bar data={dataGraph} options={options}/>
        <hr />
      </div>
      <div className="hero-total-container">
        <div className="total-container">
          <p className='secondary'>Total this month</p>
          <p className='total'>$478.33</p>
        </div>
        <div className="l-month-container">
          <p className='month-p'>+2.4%</p>
          <p className='secondary'>from last month</p>
        </div>
      </div>
    </div>
  )
}

export default Hero