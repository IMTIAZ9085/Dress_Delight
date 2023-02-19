import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./info.css";

const Info = () => {
 const [income,setIncome] = useState();
 const navigate = useNavigate();
 const TOKEN = localStorage.getItem("authToken");
 if(!localStorage.getItem("authToken")){
     navigate("/login");
   }
useEffect(()=>{
const getIncome = async()=>{
try{
     const res = await axios.get('/api/orders/income',{
          headers: {token:`Bearer ${TOKEN}`},
      });
     
      console.log(res);
}catch(e){
     console.log(e);
}
}
getIncome();
},[]);

  return (
<div className="f-info">

{/* //BLOCK 1 */}
 <div className="f-item">
      <span className="f-title">Revanue</span>
      <div className="f-money-cont"> 
      <span className="f-money">$3,422</span>
      <span className="f-moneyRate">+22.0 <ArrowUpward className="f-icon"/> </span>
      </div>
      <span className="f-sub">Compare with Last Month</span>
 </div>

{/* //BLOCK 2 */}
 <div className="f-item">
      <span className="f-title">Sales</span>
      <div className="f-money-cont">
      <span className="f-money">$5,422</span>
      <span className="f-moneyRate">-3.0 <ArrowDownward className="f-icon negative"/> </span>
      </div>
      <span className="f-sub">Compare with Last Month</span>
 </div>

{/* //BLOCK 3 */}
 <div className="f-item">
      <span className="f-title">Cost</span>
      <div className="f-money-cont">
      <span className="f-money">$3,422</span>
      <span className="f-moneyRate">+22.0 <ArrowUpward className="f-icon"/> </span>
      </div>
      <span className="f-sub">Compare with Last Month</span>
 </div>

</div>
)
}

export default Info;