import { BarChart, AccountBalance,Home, PeopleAlt, ShowChart, ShoppingCart, Flag, Notifications, Email, Work, ReportProblem } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
     <div className="sidebar-wrapper">
      <div className="sidebar-menu">
            <h3 className="sidebar-title">ADMINPANEL</h3>
            <ui className="sidebar-list">
                 <Link to="/" className="link">
                  <li className="sidebar-item active">
                        <Home className="sidebaricon" /> Home
                  </li>
                  </Link>

                  <li className="sidebar-item">
                        <BarChart className="sidebaricon"/> Analytics
                  </li>

                  <li className="sidebar-item">
                        <ShowChart className="sidebaricon"/> Sales
                  </li>

            </ui>
      </div>

      <div className="sidebar-menu">
            <h2 className="sidebar-title">QUICK MENU</h2>
            <ui className="sidebar-list">
               <Link to="/users" className="link">
                  <li className="sidebar-item">
                        <PeopleAlt className="sidebaricon"/> Users
                  </li>
               </Link>
                 <Link to="/products" className="link">
                  <li className="sidebar-item">
                        <ShoppingCart className="sidebaricon"/> Products
                  </li>
                  </Link>

                  <li className="sidebar-item">
                        <AccountBalance className="sidebaricon"/> Transaction
                  </li>
                  <li className="sidebar-item">
                        <Flag className="sidebaricon"/> Reports
                  </li>

            </ui>
      </div>


      <div className="sidebar-menu">
            <h2 className="sidebar-title">NOTIFICATION</h2>
            <ui className="sidebar-list">

                  <li className="sidebar-item">
                        <Notifications className="sidebaricon"/> Feedback
                  </li>

                  <li className="sidebar-item">
                        <Email className="sidebaricon"/> Mail
                  </li>


            </ui>
      </div>


      <div className="sidebar-menu">
            <h2 className="sidebar-title">STAFF</h2>
            <ui className="sidebar-list">

                  <li className="sidebar-item">
                        <Work className="sidebaricon"/> Manage
                  </li>

                  <li className="sidebar-item">
                        <BarChart className="sidebaricon"/> Analytics
                  </li>

                  <li className="sidebar-item">
                        <ReportProblem className="sidebaricon"/> Reports
                  </li>

            </ui>
      </div>


      
     </div>
    </div>
  )
}

export default Sidebar;