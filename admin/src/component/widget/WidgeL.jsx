import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./widgel.css";
import {format} from "timeago.js";
const WidgeL = () => {
const [order,setOrder] = useState([]);
      useEffect(()=>{
      const orderDetails = async()=>{
            const TOKEN = localStorage.getItem("authToken");
            try{
                  const res = await axios.get('/api/orders/allOrders',{
                        headers: {token:`Bearer ${TOKEN}`},
                  });
                  setOrder(res.data.data);
                  // console.log(res);
            }catch(e){
                  console.log(e);
            } 
       };
      
       orderDetails();
      
      },[]);
       

 const Button = ({type}) =>{
      return <button className={"wl-btn "+type}>{type}</button>
 }
  return (
    <div className="widgeL">
    <h3 className="wl-title">Transaction History</h3>
    <table className="wl-table">
      <tr className="wl-tr">
      <th className="wl-th">Customer</th>
      <th className="wl-th">Date</th>
      <th className="wl-th">Amout</th>
      <th className="wl-th">Status</th>
      </tr>
{
      order.map((order)=>(
            <tr className="wl-tr" key={order._id}>
      <td className="wl-User">
            <img src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2017-09/shutterstock_243101992.jpg?itok=nKwkA392" alt="" className="wl-img" />
            <span className="wl-name">{order.userId}</span>
      </td>
      <td className="wl-date">
           {format(order.createdAt)}
      </td>
      <td className="wl-amount">
            ${order.amount}
      </td>
      <td className="wl-status">
       <Button type={order.status}/>
      </td>
      </tr>
      ))
}
 




    </table>
    </div>
  )
}

export default WidgeL;