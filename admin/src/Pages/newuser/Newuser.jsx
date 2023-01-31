import { Button, Input } from '@material-ui/core';
import { Publish } from '@material-ui/icons';
import React from 'react';
import "./newuser.css";

const Newuser = () => {
  return (
    <div  className="newuser">
      <h1 className="nu-title">CREATE USER</h1>
      
      <form  className="nu-form">

                  {/* <div className="user-update-left"> */}
                        
                        <div className="nu-item">
                          <label>Username</label>
                          <Input type="text" placeholder="Enter Your Name" className="user-update-in" />
                        </div>

                        <div className="nu-item">
                          <label>Fullname</label>
                          <Input type="text" placeholder="Fullname" className="user-update-in" />
                        </div>

                        <div className="nu-item">
                          <label>Email</label>
                          <Input type="email" placeholder="Email" className="user-update-in" />
                        </div>

                        <div className="nu-item">
                          <label>Password</label>
                          <Input type="password" placeholder="Password" className="user-update-in" />
                        </div>

                        <div className="nu-item">
                          <label>Contact No</label>
                          <Input type="text" placeholder="Contact No" className="user-update-in" />
                        </div>

                        <div className="nu-item">
                          <label>Address</label>
                          <Input type="text" placeholder="Address" className="user-update-in" />
                        </div>

                        <div className="nu-item">
                          <label>Gender</label>
                          <div className="nu-gender">
                          <input type="radio" name="gender" id="male" value="male" placeholder="Address" className="user-update-in" />
                         <label htmlFor="male">Male</label>
                         <input type="radio" name="gender" id="female" value="female" placeholder="Address" className="user-update-in" />
                         <label htmlFor="female">Female</label>
                         <input type="radio" name="gender" id="others" value="others" placeholder="Address" className="user-update-in" />
                         <label htmlFor="other">Other</label>
                         </div>
                        </div>

                        <div className="nu-item">
                          <label>Active</label>
                          <select name="active" id="active" className="nu-select">
                          <option value="yes">YES</option>
                          <option value="no">NO</option>
                          </select>
                        </div>

                  
                  {/* </div> */}

                  {/* <div className="user-update-right"> */}
                        <Button className="nu-create-btn">Create</Button>
                  {/* </div> */}
            </form>


    </div>
  )
}

export default Newuser;