import { useState } from 'react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <>
    <div className='flex'>
     <Sidebar sidebarToggle={sidebarToggle }/>
     </div>
     <div>
     <Dashboard sidebarToggle={sidebarToggle}  setSidebarToggle={setSidebarToggle}/>
     <Header/>
     <Card />

     </div>
   </>
  );
}

export default App;
