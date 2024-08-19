import React from 'react'
import { FaCog, FaHome, FaPoll, FaRegEnvelope, FaRegFileAlt } from 'react-icons/fa'

const Sidebar = ({sidebarToggle}) => {
  return (
    <div className={`${sidebarToggle? "hidden" : "block"} w-64 bg-slate-500 fixed h-full px-4 py-2`} >
      <div className='my-2 mb-4'>
       <h1 className='text-xl text-white font-bold ml-6 font-extrabold	 '>Dashboard</h1>
      </div>
      <hr/>
      <ul className='mt-3 text-white font-bold'>
        <li className='mb-2 rounded hover:shodow hover:bg-slate-700 py-2'>
            <a href='' className='px-3'>
                <FaHome className='inline-block w-6, h-6 mr-2 -mt-2'></FaHome>Home</a>
        </li>
        <li className='mb-2 rounded hover:shodow hover:bg-slate-700 py-2'>
            <a href='' className='px-3'>
                <FaRegFileAlt className='inline-block w-6, h-6 mr-2 -mt-2'></FaRegFileAlt>Blogs</a>
        </li>
        <li className='mb-2 rounded hover:shodow hover:bg-slate-700 py-2'>
            <a href='' className='px-3'>
                <FaPoll className='inline-block w-6, h-6 mr-2 -mt-2'></FaPoll>Reports</a>
        </li>
        <li className='mb-2 rounded hover:shodow hover:bg-slate-700 py-2'>
            <a href='' className='px-3'>
                <FaRegEnvelope className='inline-block w-6, h-6 mr-2 -mt-2'></FaRegEnvelope>Inbox</a>
        </li>
        <li className='mb-2 rounded hover:shodow hover:bg-slate-700 py-2'>
            <a href='' className='px-3'>
                <FaCog className='inline-block w-6, h-6 mr-2 -mt-2'></FaCog>Settings</a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;
