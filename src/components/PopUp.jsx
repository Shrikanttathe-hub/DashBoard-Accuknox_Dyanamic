import React from 'react';
import './PopUp.css';
import { X } from 'lucide-react';
import Modal from './Modal';


const PopUp = ({show}) => {
  return (
    <div className='Pop'>
      <div className='pop-flex'>
         <h1>Add Widget</h1>
         <div className='cross' onClick={show}><X/></div>
      </div>
      <div className='pop-modal' >
        <Modal />
      </div>
      <div>
        <div className='bottom-button'>
        <button className='bottom-compo' onClick={show}>Cancel</button>
        <button className='bottom-compo-two'>Confirm</button>
        </div>
      </div>
    </div>
  )
}

export default PopUp;
