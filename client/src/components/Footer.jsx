import React from 'react';
import "./footer.css";
import {Email, Facebook, Instagram, Room, Smartphone, Twitter, YouTube} from "@material-ui/icons";

const Footer = () => {
  return (
    <div className="footer-cont">


{/* =======================LEFT SIDE================================================================ */}
      <div className="footer-left">
            <h1 className="footer-logo">DRESS DELIGHT</h1>
            <p className="footer-desc">
            Another Indian-founded  shopping romnded from big-name Softbank,nded  shopping platform that has garnered from and Foxconn. 
            </p>
            <div className="social-link">
            <div style={{color:"#3B5999"}} className="social-icon">
                  <Facebook  style={{fontSize:"45px"}}/>
            </div>
            <div style={{color:"#E4405F"}}  className="social-icon">
                  <Instagram style={{fontSize:"45px"}}/>
            </div>
            <div style={{color:"#55ACEE"}}  className="social-icon">
                  <Twitter style={{fontSize:"45px"}}/>
            </div>
            <div style={{color:"#E60023"}}  className="social-icon">
                  <YouTube style={{fontSize:"45px"}}/>
            </div>
            </div>
      </div>


{/* =======================CENTER SIDE================================================================ */}

      <div className="footer-center">

            <h3 className="ftmd-title">Useful links</h3>

            <ui className="footer-list">
            <li className="footer--item">Home</li>
            <li className="footer--item">Cart</li>
            <li className="footer--item">Man Fashion</li>
            <li className="footer--item">Women Fashion</li>
            <li className="footer--item">Wishlist</li>
            <li className="footer--item">Orders</li>
            <li className="footer--item">Plocy & Terms</li>
            <li className="footer--item">My Account</li>
            </ui>

      </div>


{/* =======================RIGHT SIDE================================================================ */}
      <div className="footer-right">
         <h3 className="ftr-title">Contact Details</h3>
         <p className="contact-item"> <Room style={{marginRight:"12px"}}/> 452 Dansh Sekh Lane, Kolkata</p>
         <p className="contact-item"> <Smartphone style={{marginRight:"12px"}}/> +91 9823411418</p>
         <p className="contact-item"><Email style={{marginRight:"12px"}}/> imtiasdl630@gmail.com</p>
         <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="payment" />
      </div>
    </div>
  )
}

export default Footer