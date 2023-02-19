import { Visibility } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./widges.css";

const WidgeS = () => {
const [users,setUsers] = useState([]);

useEffect(()=>{
 const userDetails = async()=>{
      const TOKEN = localStorage.getItem("authToken");
      try{
            const res = await axios.get('/api/users/?new=true',{
                  headers: {token:`Bearer ${TOKEN}`},
            });
            setUsers(res.data.data);
            // console.log(res);
      }catch(e){
            console.log(e);
      } 
 };

 userDetails();

},[]);
 
  return (
    <div className="widges">
     <span className="ws-title">NEW JOINED MEMBERS</span>
     <ul className="ws-list">

  {
      users.map((user) =>(


      <li className="ws-list-item" key={user._id}>
      <img src={user.img} alt="userImg" />
            <div className="ws-user">
            <span className="ws-username">{user.username}</span>
            <span className="ws-job">Blockchain developer</span>
            </div>
            <button className="ws-btn">
                  <Visibility/>
                  View
            </button>
      </li>



      ))
  }

     </ul>
    </div>
  )
}

export default WidgeS;