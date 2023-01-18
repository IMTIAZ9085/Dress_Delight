import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import "./cart.css";
import { Add, Remove } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import StripeCheckout from "react-stripe-checkout";
import { useEffect } from 'react';
import { userRequest } from '../requestMethods';
import { useNavigate } from "react-router-dom";

const Cart = () => {
const navigate = useNavigate();
const cart = useSelector(state=>state.cart);
const [stripeToken,setStripeToken] = useState(null);
// const [orderId, setOrderId] = useState(null);
const KEY = process.env.REACT_APP_STRIPE;

const onToken = (token) => {
  setStripeToken(token);
}
console.log(stripeToken);

useEffect(()=>{
  const makePayment = async() => {
      try{
        const res1 = await userRequest.post("/checkout/payment",{
          tokenId: stripeToken.id,
          amount:cart.total_price*100,
        });
       console.log(res1); 
      const res2 = await userRequest.post("/orders/order_Product/63b5a2f401407ff364787b91", {
        userId: "63b5a2f401407ff364787b91",
        products:[cart.products.map((item) => ({
          productId: item._id,
          quantity: item.quantity,
        }))],
        amount: cart.total_price,
        // address: data.billing_details.address,
        address:"chennai",
      });
      // setOrderId(res2._id);
      console.log(res2);
      console.log(res2.data._id);
        navigate("/success",{state:{orderId:res2.data.data.userId}});

      }catch(e){
          console.log(e);
      }
  };

  // const createOrder = async () => {
  //   try {
     

  //     console.log(res);
      
  //   } catch(e)
  //    {console.log(e);}
  // };
  
  stripeToken && cart.total_price>=1 && makePayment();

},[stripeToken,cart.total_price,navigate,cart]);


  return (
    <div className="cart-cont">
    <Navbar/>
    <Announcement/>
    <div className="cart-wrapper">
     <h1 className="cart-title">YOUR CART</h1>

     <div className="cart-top">
     <button>CONTINUE SHOPPING</button>
     <div className="cart-top-text">
     <span className="top-text">Shopping Bag({cart.quantity})</span>
     <span className="top-text">Your Wishlist(0)</span>
     </div>
     <button style={{backgroundColor:"black"}}>CHECK OUT NOW</button>
     </div>

     <div className="cart-bottom">

     <div className="cart-bottom-info">

     {/* ========PRODUCT 1========== */}
{cart.products.map(product =>(
     <div className="cart-product" key={product.id}>
{/* //product details */}
     <div className="C-product-details">
      <img src={product.img} alt="productsImg" />
      <div className="cart-bottom-product-details">
            <span className="cart-product-name">
              <b>Product :</b> {product.title}
            </span>
       <span className="cart-product-id">
            <b>ID :</b> {product._id}
       </span>
       <div className="cart-product-color"></div>
       <span className="cart-product-size">
            <b>Size:</b> {product.size}
       </span>
      </div>
      </div>

{/* ///cart product price details */}
      <div className="cart-product-price">
      <div className="product-amount-cont">
            <Add/>
            <span className="product-amount">{product.quantity}</span>
            <Remove/>
      </div>
       
         <div className="p-price">$ {product.price*product.quantity}</div>

      </div>

     </div>
     ))}
<hr className="middle-line" />

 
     </div>   


     {/* //==========SUMMARY PART===================== */}

     <div className="cart-bottom-summary">
     <h4 className="summary-title">
      ORDER SUMMARY
     </h4>
     <div className="summary-item">
     <span className="summary-itemtext">Subtotal :</span>
     <span className="summary-price">${cart.total_price}</span>
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
     <span className="summary-itemtext">Delivery Charge :</span>
     <span className="summary-price">2</span>
     </div>
     <div className="summary-item">
     <span className="summary-itemtext total">Total :</span>
     <span className="summary-price">${cart.total_price+2}</span>
     </div>

  <StripeCheckout 
  name="Dress Delight"
  images="https://avatars.githubusercontent.com/u/1486366?v=4"
  billingAddress
  shippingAddress
  description={`Your Total is $${cart.total_price}`}
  amount={cart.total_price*100}
  token={onToken}
  stripeKey={process.env.REACT_APP_STRIPE}
  >
  <Button className="ct-btn">CHECKOUT NOW</Button>
  </StripeCheckout>

     </div>

     </div>


    </div>
  
    <Footer/>
    </div>
  )
}

export default Cart;