import {Search,LocalMallOutlined} from "@material-ui/icons";
import { Badge, Input,Button } from "@material-ui/core";
import React from 'react';
import './navbar.css';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { removeData } from "../redux/userRedux";
import { persistor } from "../redux/store";

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity);
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  // console.log(quantity);
    const rmdata = async() => {
      try{
      persistor.pause();
      persistor.flush().then(() => {
        return persistor.purge();
      });
      localStorage.removeItem("authToken");
      window.location.reload();
      navigate("/login");
    }catch(err){
      console.log(err);
    }
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
    {!token &&  
     <Link to="/register" style={{textDecoration:"none",color:"black"}}><p>REGISTER</p></Link> 
    }
   
{  !token && <Link to="/login" style={{textDecoration:"none",color:"black"}}><p>LOGIN</p></Link> 
}{     token && <Button style={{fontWeight:"bold",marginBottom:"1rem",marginLeft:"1rem"}} onClick={rmdata}>LOGOUT</Button>
}
{token && 
<Link to="/cart">
     <p>
     <Badge badgeContent={quantity} color="secondary">
     <div  classname="nav-bag">
     <LocalMallOutlined  />
     </div>
     </Badge>
     </p>
</Link>
}

     </div>
     </div>
    </div>
  )
}

export default Navbar;