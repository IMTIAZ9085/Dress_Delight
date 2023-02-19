import React, { useEffect, useMemo, useState,useHistory } from 'react'
import Chart from '../../component/chart/Chart';
import Info from '../../component/Info/Info';
import WidgeS from '../../component/widget/WidgeS';
import WidgeL from '../../component/widget/WidgeL';
import { userdata } from '../../data';
import {useNavigate} from 'react-router-dom';
import "./home.css";
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate(); 
  if(!localStorage.getItem("authToken")){
    navigate("/login");
  }

  const [userStats,setUserStats] = useState([]);


  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

useEffect(()=>{ 

  if(!localStorage.getItem("authToken")){
    navigate("/login");
  }
    const getStats = async()=>{
        
        try{
         
          const TOKEN = localStorage.getItem("authToken");
          const res = await axios.get('/api/users/user_stats',{
              headers: {token:`Bearer ${TOKEN}`},
            });
            res.data.map((item)=>(
            setUserStats((prev)=>[
              ...prev,
              {name:MONTHS[item._id-1],"Active User":item.total},
            ]) 
            )   
            ) 
            // console.log(res);
 
        }catch(e){
        console.log(e);
        }
    }
    getStats();
},[MONTHS,navigate]);

// console.log(userStats);

return (
    <div className="home">
      
    <Info/> 
    <Chart data={userStats} title="User Analytics" grid datakey="Active User"/>
    <div className="h-widgets">
      <WidgeS/>
      <WidgeL/>
    </div>
    </div>
  )
}

export default Home;