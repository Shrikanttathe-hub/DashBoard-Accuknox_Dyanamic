import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Info from './db.json';
import './Modal.css';
import { Checkbox } from '@mui/material';
import { MdDelete } from 'react-icons/md';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  const [popupShow, setPopupShow] = useState(false); 
  const [editTask, setEditTask] = useState("");
  const [editIndex, setEditIndex] = useState(0);

 useEffect(()=> {
  const storedItem = localStorage.getItem("list");
  if(storedItem){
    setTasks(JSON.parse(storedItem));
  }
 },[]);

 const addTask = () => {
  if(currentTask.trim != "")
  {
    const updatedTask = [...Info, currentTask];
    setTasks(updatedTask);
    localStorage.setItem("list", JSON.stringify(updatedTask));
    setCurrentTask("");
  }
 }

const removeTask = (i) => {
  const removeTasks = Info.filter((_,index)=> index != i);
  setTasks(removeTasks);
  localStorage.setItem("lists", JSON.stringify(removeTasks));
}

const ShowPopUP = (i, item) => {
  setPopupShow(true);
  setEditIndex(i);
  setEditTask(item);
}

const saveEdit =()=> {
  const newEdit = Info.map((item, index)=> (
    index === editIndex?editTask:item
  ));
  setTasks(newEdit);
  localStorage.setItem("lists", JSON.stringify(newEdit));
  setPopupShow(false);
}

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <Box sx={{ width: '100%', ml:'7' }}>
      <div sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="CSPM" />
          <Tab label="CWPP" />
          <Tab label="IMAGE" />
          <Tab label="Ticket" />
        </Tabs>
      </div>
      <CustomTabPanel value={value} index={0}>
        <ul className='list' >
          {
            Info.map((Item, index)=> (
              <li key={index } className='list1'><span onClick={()=>ShowPopUP(index)}><Checkbox/></span>{Item.Title}</li>
            ))
          }
        </ul>
      </CustomTabPanel>
      
      <CustomTabPanel value={value} index={1}>
      <ul className='list' >
          {
            Info.map((Item, index)=> (
              <li key={index } className='list1'><span onClick={()=>ShowPopUP(index)}><Checkbox/></span>{Item.Pair}</li>
            ))
          }
        </ul>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <ul className='list' >
          {
            Info.map((Item, index)=> (
              <li key={index } className='list1'><span onClick={()=>ShowPopUP(index)}><Checkbox/></span>{Item.Passed}</li>
            ))
          }
        </ul>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <ul className='list' >
          {
            Info.map((Item, index)=> (
              <li key={index } className='list1'><span onClick={()=>ShowPopUP(index)}><Checkbox/></span>{Item.Warning}</li>
            ))
          }
        </ul>
      </CustomTabPanel>
      {
        popupShow && (
          <div className='PopupContent'>
            <input className='editPopUpInput'  type='text' onChange={(e)=>setEditTask(e.target.value)}/>
            <button className='saveButton' onClick={()=>saveEdit}>Save</button>
          </div>
        )
      }
    </Box>
  );
}


