import { BarChart, Home, ShowChart } from '@material-ui/icons';
import React from 'react';
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
     <div className="sidebar-wrapper">
      <div className="sidebar-menu">
            <h3 className="sidebar-title">ADMINPANEL</h3>
            <ui className="sidebar-list">

                  <li className="sidebar-item">
                        <Home/> Home
                  </li>

                  <li className="sidebar-item">
                        <BarChart/> Analytics
                  </li>

                  <li className="sidebar-item">
                        <ShowChart/> Sales
                  </li>

            </ui>
      </div>

      <div className="sidebar-menu">
            <h3 className="sidebar-title">ADMINPANEL</h3>
            <ui className="sidebar-list">

                  <li className="sidebar-item">
                        <Home/> Home
                  </li>

                  <li className="sidebar-item">
                        <BarChart/> Analytics
                  </li>

                  <li className="sidebar-item">
                        <ShowChart/> Sales
                  </li>

            </ui>
      </div>

      
     </div>
    </div>
  )
}

export default Sidebar;