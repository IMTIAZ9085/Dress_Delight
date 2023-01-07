import React from 'react';
import "./categoryitem.css";
import { Button } from '@material-ui/core';


const Categoryitem = ({item}) => {
  return (
    <div className="categoryitem-cont">
    <img src={item.img} alt="categoryIm" />
    <div className="cat-info">
      <h1 className="cat-title">
       {item.title}
      </h1>
      <Button style={{outline:"none",backgroundColor:"blue",color:"white", fontSize:"17px",padding:"7px"}} variant="outlined" color='primary'>BUY NOW</Button>
    </div>
    </div>
  )
}

export default Categoryitem;