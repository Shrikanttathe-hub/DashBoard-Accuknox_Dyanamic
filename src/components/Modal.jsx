import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Info from './db.json';
import './Modal.css';
// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

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

// function a11yProps(number) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <Box sx={{ width: '100%', ml:'7' }}>
      {/* {
        Info.map((Info, i) => (
      <div key={i}>   */}
      <div sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="CSPM" /><br/>
          <Tab label="CWPP" />
          <Tab label="IMAGE" />
          <Tab label="Ticket" />
        </Tabs>
      </div>
      <CustomTabPanel value={value} index={0}>
        <ul className='list' >
          <li className='list1'>Cloud Accounts</li>
          <li className='list1'> Cloud Account Risk Assessment</li>
        </ul>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <li>sdf</li>
        <li>sdf</li>
        <li>sdf</li>
        <li>sdf</li>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      {/* </div>
        ))
      } */}
    </Box>
  );
}






// import React, { useState } from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';

// export default function Modal() {
//   const [value, setValue] = useState(0);

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   return (
//     <div sx={{ width: '100%', bgcolor: 'background.paper' }}>
//       <Tabs value={value} onChange={handleChange} centered>
//         <Tab label='CSPM' />
//         <Tab label="CWPP" />
//         <Tab label="Image" />
//         <Tab label="Ticket" />
//       </Tabs>
//     </div>
//   );
// }
