import React from 'react'
import { FaBars, FaBell, FaSearch, FaUserCircle } from 'react-icons/fa'
import { LuBellRing } from 'react-icons/lu';

const Navbar = ({sidebarToggle, setSidebarToggle}) => {

  
  return (
  <nav className='px-4 py-3 flex justify-between'>
    <div className='flex items-center text-xl'>
      <FaBars className='text-slate-600 me-4 cursor-pointer' onClick={() => setSidebarToggle(!sidebarToggle)}/>
      <span className='text-indigo-950 font-semibold'>Dashboard V2</span>
    </div>
    <div className='flex items-center gap-x-10'>
      <div className='relative md-w-65 mr-14 '>
        <span className='relative md:absolute inset-y-0 left-0 flex items-center pl-2'>
          <button className='p-1 focus:outline-none text-white md:text-black'><FaSearch/></button></span>
        <input type='text' placeholder='Search anything...' className='bg-slate-200 w-full px-14 py-1 pl-12 rounded shadow outline-none hidden md:block '/>
      </div>

      <div className='text-slate-600'><LuBellRing className='w-8 h-6 '/></div>

      <div className='relative'>
        <button className='text-slate-600'>
          <FaUserCircle className='w-6 h-6 mt-1'/>
          <div className='z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0'>
            <ul className='py-2 text-sm text-gray-950'>
              <li><a href='#'>Profile</a></li>
              <li><a href='#'>Setting</a></li>
              <li><a href='#'>Log Out</a></li>
            </ul>
          </div>
        </button>
      </div>
    </div>
  </nav>
  )
}

export default Navbar;
