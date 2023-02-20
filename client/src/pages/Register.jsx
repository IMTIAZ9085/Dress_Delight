import { Button, Checkbox, FormControlLabel, FormGroup, Input } from '@material-ui/core';
import React, { useState } from 'react';
import "./register.css";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';


const Register = () => {
  const dispatch = useDispatch();
  // const {isFetching,error} = useSelector((state)=>state.user);
  const navigate = useNavigate();
  const [Input, setInput] = useState({
    username:"",
    email:"",
    password:"",
    img:""
})
  const handleUpdate=async(event)=>{
    const {name,value} = event.target;
    setInput(previnput=>{
     return{
      ...previnput,
      [name]:value
     }
    })
    }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
     const res = await axios.post('/api/auth/register',Input);
     console.log(res);
     if(res){
      localStorage.setItem("authToken",res.data.data.Token);
      navigate("/");
     }
    }catch(err){
      console.log(err);
    }

    login(dispatch,{email: Input.email, password: Input.password});

  }



  return (
    <div className="register-cont">
    <div className="left">
       <h1 className="reg-head">DRESS DELIGHT</h1>
    </div>
    <div className="right">
     <div className="register-wrapper">
       <h1 className="register-title">CREATE AN ACCOUNT</h1>
       <form className='register-form'>
       <input type="text" onChange={handleUpdate} name ="username" value={Input.username} placeholder="Username" />
       <input type="text" onChange={handleUpdate} name ="email" value={Input.email} placeholder="Email" />
       <input type="text" onChange={handleUpdate} name ="password" value={Input.password} placeholder="Password" />
       <input type="file" onChange={handleUpdate} name ="img" value={Input.img} />
       <FormGroup>
        <FormControlLabel  className="policy" style={{fontWeight:"300",fontSize:"10px"}} control={<Checkbox />} label="I am willingly 
        giving my personal data
        in accordance with Privacy Policy" />
       </FormGroup>
       <Button onClick={handleSubmit} style={{width:"40%",outline:"none",backgroundColor:"teal",color:"white",padding:"10px"}} className='register-button'>SIGN UP</Button>
       </form>
     </div>
     </div>
    </div>
  )
}

export default Register;