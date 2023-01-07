import React from 'react'
import { Button, Checkbox, FormControlLabel, FormGroup, Input, Link } from '@material-ui/core';
const Login = () => {
  return (
    <div className="register-cont">
    <div className="register-wrapper">
      <h1 className="register-title">SIGN INTO YOUR ACCOUNT</h1>
      <form className='register-form'>
      <Input  type="text" placeholder="Username" />
      <Input type="text" placeholder="password" />
      
      <Button style={{marginTop:"20px",width:"30%",outline:"none",backgroundColor:"teal",color:"white",padding:"9px"}} className='register-button'>SIGN IN</Button>
      <a>Forget Password?</a>
      <Link to="/register">Create a New Account</Link>
      </form>
    </div>
   </div>
  )
}

export default Login;