import React, { useState } from 'react'
import { BsClockFill, BsThreeDotsVertical } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa'
import { HiDotsVertical } from 'react-icons/hi'
import { RxDividerVertical } from 'react-icons/rx'
import { SlRefresh } from 'react-icons/sl'
import './Header.css';
import PopUp from './PopUp'

const Header = () => {
  const [openPopup, setOpenPopup] = useState(false);

  const show = () => {
    if(openPopup == true){
      setOpenPopup(false);
    }else{
      setOpenPopup(true);
    }
  }

  return (
    <div className='main1'>
        <a className='dash'>CNAPP Dashboard</a>
    <div className='main2'>
      <div className='Add-widget1' onClick={show}>Add Widget<span><FaPlus /></span></div>
         {
           openPopup && (<PopUp show={show}/>)
         }
      <span className='refresh'><SlRefresh /></span>
      <span className='dots'><HiDotsVertical /></span>
      <div className='last-day'><span><BsClockFill /><RxDividerVertical /></span>Last 2 Days
      </div>
    </div>  
    </div>
  )
}

export default Header;
