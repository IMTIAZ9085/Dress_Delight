import React from 'react'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import "./cart.css";
import { Add, Remove } from '@material-ui/icons';
import { Button } from '@material-ui/core';
const Cart = () => {
  return (
    <div className="cart-cont">
    <Navbar/>
    <Announcement/>
    <div className="cart-wrapper">
     <h1 className="cart-title">YOUR CART</h1>

     <div className="cart-top">
     <button>CONTINUE SHOPPING</button>
     <div className="cart-top-text">
     <span className="top-text">Shopping Bag(4)</span>
     <span className="top-text">Your Wishlist(0)</span>
     </div>
     <button style={{backgroundColor:"black"}}>CHECK OUT NOW</button>
     </div>

     <div className="cart-bottom">

     <div className="cart-bottom-info">

     {/* ========PRODUCT 1========== */}

     <div className="cart-product">
{/* //product details */}
     <div className="C-product-details">
      <img src="nike.jpg" alt="productsImg" />
      <div className="cart-bottom-product-details">
            <span className="cart-product-name">
              <b>Product :</b> NIKE LIGHT SHOES 
            </span>
       <span className="cart-product-id">
            <b>ID :</b> 1231245432
       </span>
       <div className="cart-product-color"></div>
       <span className="cart-product-size">
            <b>Size:</b> 45.3
       </span>
      </div>
      </div>

{/* ///cart product price details */}
      <div className="cart-product-price">
      <div className="product-amount-cont">
            <Add/>
            <span className="product-amount">4</span>
            <Remove/>
      </div>
       
         <div className="p-price">$40</div>

      </div>

     </div>

<hr className="middle-line" />
     {/* ========PRODUCT 2========== */}
     <div className="cart-product">
{/* //product details */}
     <div className="C-product-details">
      <img src="iphone.jpg" alt="productsImg" />
      <div className="cart-bottom-product-details">
            <span className="cart-product-name">
              <b>Product :</b> Apple Iphone 11
            </span>
       <span className="cart-product-id">
            <b>ID :</b> 2331245432
       </span>
       <div style={{backgroundColor:"gold"}} className="cart-product-color"></div>
       <span className="cart-product-size">
            <b>Size:</b> 15.3
       </span>
      </div>
      </div>

{/* ///cart product price details */}
      <div className="cart-product-price">
      <div className="product-amount-cont">
            <Add/>
            <span className="product-amount">4</span>
            <Remove/>
      </div>
       
         <div className="p-price">$1000</div>

      </div>

     </div>



     </div>


     {/* //==========SUMMARY PART===================== */}

     <div className="cart-bottom-summary">
     <h4 className="summary-title">
      ORDER SUMMARY
     </h4>
     <div className="summary-item">
     <span className="summary-itemtext">Subtotal :</span>
     <span className="summary-price">$1040</span>
     </div>

     <div className="summary-item">
     <span className="summary-itemtext">Estimated Shipping :</span>
     <span className="summary-price">$5.90</span>
     </div>

     <div className="summary-item">
     <span className="summary-itemtext">Shipping Discount :</span>
     <span className="summary-price">-$5.90</span>
     </div>

     <div className="summary-item">
     <span className="summary-itemtext total">Total :</span>
     <span className="summary-price">$1040</span>
     </div>
  
  <Button className="ct-btn">CHECKOUT NOW</Button>
     </div>

     </div>


    </div>
  
    <Footer/>
    </div>
  )
}

export default Cart;