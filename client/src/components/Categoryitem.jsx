import React from 'react';
import "./categoryitem.css";
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
 

const Categoryitem = ({item}) => {
  return (
    <div className="categoryitem-cont">
    <Link to={`/product_List/${item.cat}`}>
    <img src={item.img} alt="categoryIm" />
    <div className="cat-info">
      <h1 className="cat-title">
       {item.title}
      </h1>
      <Button style={{outline:"none",backgroundColor:"blue",color:"white", fontSize:"17px",padding:"7px"}} variant="outlined" color='primary'>BUY NOW</Button>
    </div>
    </Link>
    </div>
  )
}

export default Categoryitem;