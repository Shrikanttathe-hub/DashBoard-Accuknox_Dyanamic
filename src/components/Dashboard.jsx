import React from 'react'
import Navabar from './Navbar';

const Dashboard = ({sidebarToggle, setSidebarToggle}) => {
  return (
    <div className={`${sidebarToggle? "" : "ml-64"} `}>
      <Navabar sidebarToggle={sidebarToggle} 
      setSidebarToggle={setSidebarToggle}/>
    </div>
  )
}

export default Dashboard;
