
import Navbar from '../components/Navbar.jsx';
import LeftSidebarMenu from '../components/left-SideBar.jsx';
import './layout.css';
import LeftIcon from '../components/left-icon.jsx';
import React, {useState} from 'react';

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);


  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  }
  return (
    <div className="app">
      <Navbar toggleSidebar={toggleSidebar} />
      <LeftIcon />
      <LeftSidebarMenu isOpen={isSidebarOpen} onToggle={() => setSidebarOpen(!isSidebarOpen)}/>
    </div>
  );
};

export default Layout;
