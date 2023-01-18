import React from 'react'
import { Button, Input, Link } from '@material-ui/core';
import { useState } from 'react';
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { publicRequest } from '../requestMethods';
// import { loginFailure, loginStart, loginSuccess } from '../redux/userRedux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const {isFetching,error} = useSelector((state)=>state.user);

  const handleLogin = async (e) => {
  e.preventDefault();
  login(dispatch,{email: email, password: password});
  navigate("/");
 }

  return (
    <div className="register-cont">
    <div className="register-wrapper">
      <h1 className="register-title">SIGN INTO YOUR ACCOUNT</h1>
      <form className='register-form'>
      <Input  type="email" placeholder="email" 
      onChange={(e)=>setEmail(e.target.value)}
       />
      <Input type="password" placeholder="password"
            onChange={(e)=>setPassword(e.target.value)}
       />
      
      <Button 
      style={{marginTop:"20px",width:"30%",outline:"none",backgroundColor:"teal",color:"white",padding:"9px"}} 
      className='register-button'
      onClick={handleLogin}
      disabled={isFetching}
      >SIGN IN</Button>
{  error &&  <span style={{color:"red"}} className="err">Oops!..Something Went Wrong</span>}      
      <a href="/forgetPassword">Forget Password?</a>
      <Link to="/register">Create a New Account</Link>
      </form>
    </div>
   </div>
  )
}

export default Login;