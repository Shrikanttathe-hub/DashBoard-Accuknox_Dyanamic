import React, { useState } from 'react';
import  './Card.css';
import DoughnutChart from './Doughnut';
import DoughnutChart2 from './DoughnutChart2';
import Info from './db.json';


const Card = () => {
  
    return (
    <div className='card-heading'>
     <h2>CSPM Executive Dashboard</h2>
     <div className='flex-box'>
      <div className='card'>Clouds Account
        <DoughnutChart/>
      </div>
      <div className='card'>Clouds Account Risk Assesment 
        <DoughnutChart2/>
      </div>
      <div className='card'><button className='add-widget-1'>+ Add Widget</button></div>
     </div>
     <h2 className='heading2'>CWPP Dashboard</h2>
     <div className='flex-box'>
      <div className='card'>Top 5 NameSpace Specific Alerts</div>
      <div className='card'>Workload Alerts</div>
      <div className='card'><button className='add-widget-1'>+ Add Widget</button></div>
      </div>
      <h2  className='heading2'>Registry Scan</h2>
     <div className='flex-box'>
      <div className='card'>Image Risk Assesment</div>
      <div className='card'>Image Security Issues</div>
      <div className='card'><button className='add-widget-1'>+ Add Widget</button></div>
     </div>
     
    </div>

  )
}

export default Card
