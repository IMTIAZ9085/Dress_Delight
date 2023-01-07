import { Button, Checkbox, FormControlLabel, FormGroup, Input } from '@material-ui/core';
import React from 'react';
import "./register.css";

const Register = () => {
  return (
    <div className="register-cont">
     <div className="register-wrapper">
       <h1 className="register-title">CREATE AN ACCOUNT</h1>
       <form className='register-form'>
       <Input type="text" placeholder="First Name" />
       <Input type="text" placeholder="Last Name" />
       <Input  type="text" placeholder="Username" />
       <Input type="email" placeholder="email" />
       <Input type="text" placeholder="password" />
       <Input type="text" placeholder="confirm password" />
       <FormGroup>
        <FormControlLabel style={{fontWeight:"300"}} control={<Checkbox />} label="I am willingly 
        giving my personal data
        in accordance with Privacy Policy" />
       </FormGroup>
       <Button style={{width:"40%",outline:"none",backgroundColor:"teal",color:"white",padding:"10px"}} className='register-button'>SIGN UP</Button>
       </form>
     </div>
    </div>
  )
}

export default Register;