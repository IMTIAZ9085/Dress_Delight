import React from 'react';
import "./newsletter.css";
import {Send} from "@material-ui/icons";
import {Button,Input} from "@material-ui/core";


const Newsletter = () => {
  return (
    <div className="newsletter-cont">
       <h1 className="news-title">Newsletter</h1>
       <p className="news-desc">Send Us Your Email And Subscribe Our Page To Get Day To Day Update</p>
       <div className="news-ip">
        <Input type="email" className="newsletter-ip" placeholder="Enter Your Email" />
        <Button style={{flex:"1",backgroundColor:"teal",outline:"none"}}>
          <Send/>
        </Button>
       </div>
    </div>
  )
}

export default Newsletter;