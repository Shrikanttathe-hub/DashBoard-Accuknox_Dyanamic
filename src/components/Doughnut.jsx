import React from 'react'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js/auto'; 
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(
    ArcElement,
    Legend,
    Tooltip
)



const DoughnutChart = () => {
  
  var data = {
    labels: [ 'Not Connected(2)','Connected(2)'],
    datasets: [{
      label: 'Dataset',
      data: [2,2],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        '#528ef2',
      ],
      borderColor: [
        'rgb(153, 102, 255)',
        'rgb(153, 102, 255)',
      ],
      borderWidth: 1,
      hoverOffset: 4
    }]
  }

  var options = {
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontSize: 26
      }
    }
  }
    return (
    <div>
      <Doughnut height={200} data={data} options={options}/>   
    </div>
  )
}

export default DoughnutChart;
