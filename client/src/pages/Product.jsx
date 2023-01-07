import React from 'react';
import "./product.css";
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';
import { Button } from '@material-ui/core';

const Product = () => {
  return (
    <div className="product-page-cont">
     <Navbar/>
     <Announcement/>
    
    <div className="product-wrapper">
      <div className="img-cont">
            <img src="nikon1.jpg" alt="product" />
      </div>
      <div className="product-page-info">
            <h1 className="product-page-title">Fastrack-Watch</h1>
            <p className="procuct-page-desc">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, sunt perferendis, animi cupiditate voluptatem illum, aperiam adipisci laborum vitae est nihil nobis voluptates eaque eveniet minus tempore quos aliquam praesentium.
            </p>
            <span className="product-price">$200</span>

            <div className="filter-cont">
     <div className="filter" style={{margin:"40px"}}> 
      <span className="filter-text">Filter: </span> 
      <select>
     <option disabled  selected>color</option>
     <option>Blue</option>
     <option>White</option>
     <option>Black</option>
     <option>Red</option>
     <option>Yellow</option>
     <option>Green</option>
     </select>

     <select>
     <option disabled  selected>Size</option>
     <option>S</option>
     <option>M</option>
     <option>XS</option>
     <option>XL</option>
     <option>L</option>
     </select>

     </div> 
     </div>

<div className="add-cont">

      <div className="amount-cont">
            <Remove/>
            <span className="amount">1</span>
            <Add/>
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