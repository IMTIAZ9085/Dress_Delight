import {Search,LocalMallOutlined, LaptopWindows} from "@material-ui/icons";
import { Badge, Input } from "@material-ui/core";
import React from 'react';
import './navbar.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { removeData } from "../redux/userRedux";
import { persistor } from "../redux/store";

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity);
  // console.log(quantity);
    const rmdata = async() => {
      persistor.pause();
      persistor.flush().then(() => {
        return persistor.purge();
      });
      window.location.reload();
    }
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
     <Link to="/" style={{textDecoration:"none"}}><h2>DRESS DELIGHT</h2></Link> 
     </div>

     <div className="wrapper-right">
     
     <Link to="/register" style={{textDecoration:"none",color:"black"}}><p>REGISTER</p></Link> 

   
     <Link to="/login" style={{textDecoration:"none",color:"black"}}><p>LOGIN</p></Link> 
     <button onClick={rmdata}>LOGOUT</button>

<Link to="/cart">
     <p>
     <Badge badgeContent={quantity} color="secondary">
     <div  classname="nav-bag">
     <LocalMallOutlined  />
     </div>
     </Badge>
     </p>
</Link>

     </div>
     </div>
    </div>
  )
}

export default Navbar;