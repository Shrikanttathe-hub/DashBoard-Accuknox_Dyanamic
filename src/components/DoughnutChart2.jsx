import React from 'react'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js/auto'; 
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(
    ArcElement,
    Legend,
    Tooltip
)



const DoughnutChart2 = () => {
  
  var data = {
    labels: [ 'Failed', 'Warning', 'Not available','Passed'],
    datasets: [{
      label: 'Dataset',
      data: [2,7,3,4,5],
      backgroundColor: [
        '#b9140f',
        '#19a55a',
        '#fad732',
        'rgba(54, 162, 235, 0.2)',
      ],
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

export default DoughnutChart2;
