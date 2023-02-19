import React from 'react';
import "./topbar.css";
import {Notifications,Language,Settings} from '@material-ui/icons';
import { Badge,Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const Topbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  const handleLogout = () =>{
   localStorage.removeItem("authToken");
   navigate("/");
   //  window.location.reload();
   
  }
  return (
    <div className="topbar">
    <div className="topbar-wrapper">
      <div className="top-left">
        <span className="logo">DRESS DELIGHT</span>
      </div>
      <div className="top-right">

         <div className="topbar-icons-cont">
          <Badge badgeContent={5} color="primary">
          <Notifications/>
          </Badge>
         </div>

         <div className="topbar-icons-cont">
          <Badge badgeContent={3} color="primary">
          <Language/>
          </Badge>
         </div>

         <div className="topbar-icons-cont">
          <Settings/>
         </div>
<img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" alt="adminAvatar" className='admin-avatar'/>

<div className="topbar-icons-cont">
       {token &&   <Button onClick={handleLogout} style={{color: "white",border: "1px solid white",marginLeft: "1rem"}}>Log Out</Button> }
         </div>

      </div>
      </div>
    </div>
  )
}

export default Topbar;