import React from 'react';
import "./user.css";
import {Button, Input} from "@material-ui/core";
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Public, Publish } from '@material-ui/icons';
import {Link} from "react-router-dom";

const User = () => {
  return (
    <div className="user">
     <div className="user-title-cont">
      <h1 className="user-title">
            Create User
      </h1>
      <Link style={{textDecoration:"none"}}to="/newuser">
      <Button className="user-add-btn">
            Create
      </Button>
      </Link>
     </div>

     <div className="user-cont">

      <div className="user-show">
      <div className="user-show-top">
            <img className="user-show-img" src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTF1-h_O3puyTlOfqWbZwOqtBJRkBxUYGpr72jqiDJVcZaoO5lR5r--M4tfcNhgs4EmwG9Whx-TqgQXnQg" alt="" />
            <div className="user-show-top-title">
            <span className="user-show-username">Shakrukh Khan</span>
            <span className="user-show-job">Bollywood Actor</span>
            </div>
      </div>
      <div className="user-show-bottom">
            <span className="user-show-btm-title">Account Info</span>
            
            <div className="user-show-info">
            <PermIdentity className="user-show-icon"/>
            <span className="user-show-info-title">
                  Sharukh Khan
            </span>
            </div>

            <div className="user-show-info">
            <CalendarToday className="user-show-icon"/>
            <span className="user-show-info-title">
                 09.03.1993
            </span>
            </div>

            <span className="user-show-btm-title">Contact Info</span>
            <div className="user-show-info">
            <PhoneAndroid className="user-show-icon"/>
            <span className="user-show-info-title">
                +91 9823409428
            </span>
            </div>

            <div className="user-show-info">
            <MailOutline className="user-show-icon"/>
            <span className="user-show-info-title">
                  sharukh8923@gmail.com
            </span>
            </div>

            <div className="user-show-info">
            <LocationSearching className="user-show-icon"/>
            <span className="user-show-info-title">
                 Mumbai , India
            </span>
            </div>
      
      </div>
      </div>

      <div className="user-update">
            <span className="user-update-title">Update Your Details</span>
            <form  className="user-update-form">

                  <div className="user-update-left">
                        
                        <div className="user-update-item">
                          <label>Username</label>
                          <Input type="text" placeholder="Sharukh Khan" className="user-update-in" />
                        </div>

                        <div className="user-update-item">
                          <label>Username</label>
                          <Input type="text" placeholder="Sharukh" className="user-update-in" />
                        </div>

                        <div className="user-update-item">
                          <label>Fullname</label>
                          <Input type="text" placeholder="Sharukh Khan" className="user-update-in" />
                        </div>

                        <div className="user-update-item">
                          <label>Email</label>
                          <Input type="email" placeholder="sharukh8923@gmail.com" className="user-update-in" />
                        </div>

                        <div className="user-update-item">
                          <label>Contact No</label>
                          <Input type="text" placeholder="+91 9823409428" className="user-update-in" />
                        </div>

                        <div className="user-update-item">
                          <label>Contact No</label>
                          <Input type="text" placeholder="Mumbai , India" className="user-update-in" />
                        </div>

                  
                  </div>

                  <div className="user-update-right">
                        <div className="user-update-cont">
                              <img className="user-upload-img" src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTF1-h_O3puyTlOfqWbZwOqtBJRkBxUYGpr72jqiDJVcZaoO5lR5r--M4tfcNhgs4EmwG9Whx-TqgQXnQg" alt="" />
                              <label htmlFor="file"><Publish className="user-update-icon"/></label>
                              <Input style={{"display":"none"}} type="file" id="file" />
                        </div>
                        <Button className="user-update-btn">Update</Button>
                  </div>
            </form>
      </div>

     </div>

    </div>
  )
}

export default User;