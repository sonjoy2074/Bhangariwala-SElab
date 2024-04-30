import React, { useState } from 'react';
import './admin_home.css';
import Admin_Blog from '../admin/admin_blog/admin_blog';
import Dashboard from '../admin/dashboard/dashboard';
import Pickup_table from '../admin/pickup_table/pickup_table';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { ImBlog } from 'react-icons/im';
import { FaTruckPickup } from "react-icons/fa6";
const AdminHome = () => {
  const [showDashboard, setShowDashboard] = useState(true);
  const [showBlog, setShowBlog] = useState(false);
  const [showPickup, setShowPickup] = useState(false);

  const handleDashboardClick = () => {
    setShowDashboard(true);
    setShowBlog(false);
    setShowPickup(false);
  };

  const handleBlogClick = () => {
    setShowDashboard(false);
    setShowBlog(true);
    setShowPickup(false);
  };

  const handlePickupClick = () => {
    setShowDashboard(false);
    setShowBlog(false);
    setShowPickup(true);
  };

  return (
    <div className='admin'>
      <div className='menu'>
        <button className='admin_btn' onClick={handleDashboardClick}>
          <MdOutlineSpaceDashboard className='admin_icon' />
          Dashboard
        </button>
        <button className='admin_btn' onClick={handleBlogClick}>
          <ImBlog className='admin_icon' />
          Blog
        </button>
        <button className='admin_btn' onClick={handlePickupClick}>
        <FaTruckPickup className='admin_icon'/>
          Pickup 
        </button>
      </div>
      <div className='show'>
        {showDashboard && <Dashboard />}
        {showBlog && <Admin_Blog />}
        {showPickup && <Pickup_table/>}
      </div>
    </div>
  );
};

export default AdminHome;
