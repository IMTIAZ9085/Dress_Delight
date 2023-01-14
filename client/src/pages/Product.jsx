import React, { useEffect, useState } from 'react';
import "./product.css";
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Product = () => {
      const location = useLocation();
      const id = location.pathname.split('/')[2];
      const [product,setProduct] = useState({});
      const [quantity,setQuantity] = useState(1);
      const [color,setColor] = useState("");
      const [size,setSize] = useState("");

      useEffect(() => {
         const getProduct = async ()=> {
           try {
            const res = await axios.get(`/api/products/find/${id}`);
            // console.log(res);
            setProduct(res.data.data);
           } catch (e) {
            console.log(e);
           }
         }
         getProduct()
      
      }, [id]);


      const handlequantity = (type) => {
        if(type==="dec" && quantity>1){
         setQuantity(quantity-1);
        }else if(type==="inc"){
            setQuantity(quantity+1);
        }
      }
      
  return (
    <div className="product-page-cont">
     <Navbar/>
     <Announcement/>
    
    <div className="product-wrapper">
      <div className="img-cont">
            <img src={product.img} alt="product" />
      </div>
      <div className="product-page-info">
            <h1 className="product-page-title">{product.title}</h1>
            <p className="procuct-page-desc">
            {product.desc}
            </p>
            <span className="product-price">$ {product.price}</span>

            <div className="filter-cont">
     <div className="filter" style={{margin:"40px"}}> 
      <span className="filter-text">Filter: </span> 

      <select  onChange={(e)=>setColor(e.target.value)}>
     <option disabled selected>color</option>
     {
      product.color?.map((col) =>(
            <option key={col}>{col}</option>
        ))
     }
     </select>

     <select  onChange={(e)=>setSize(e.target.value)}>
     <option disabled  selected>Size</option>
     {
      product.size?.map((col) =>(
            <option key={col}>{col}</option>
        ))
     }
     </select>
     </div> 
     </div>

<div className="add-cont">

      <div className="amount-cont">
            <Remove onClick={() =>handlequantity("dec")}/>
            <span className="amount">{quantity}</span>
            <Add onClick={() =>handlequantity("inc")}/>
      </div>

      <Button>Add To Cart</Button>
</div>



      </div>
    </div>


     <Newsletter/>
     <Footer/>
    </div>
  )
}

export default Product;