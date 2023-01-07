import {Search,LocalMallOutlined} from "@material-ui/icons";
import { Badge, Input } from "@material-ui/core";
import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="nav-container">
    <div className="wrapper">

     <div className="wrapper-left">
     <span className="l">EN</span> 

     {/* //search container */}
     <div className="search">
      {/* <input type="text" /> */}
      <Input placeholder="Search"/>
      <Search className="s-logo" style={{color:"rgb(13, 48, 101);",fontSize:"30px"}}/>
     </div>

     </div>

     <div className="wrapper-center">
      <h2>DRESS DELIGHT</h2>
     </div>

     <div className="wrapper-right">
     <p>REGISTER</p>
     <p>LOGIN</p>
     <p>
     <Badge badgeContent={4} color="secondary">
     <div  classname="nav-bag">
     <LocalMallOutlined  />
     </div>
     </Badge>
     </p>

     </div>
     </div>
    </div>
  )
}

export default Navbar;