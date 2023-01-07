import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import "./productlist.css";
import { MenuItem, Select } from '@material-ui/core';

const ProductList = () => {
  return (
    <div className="product-list-page-cont">
     <Navbar/>
     <Announcement/>

     <h1 className="pp-title">Products</h1>

     <div className="filter-cont">
     <div className="filter"> 
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
    


     <div className="filter"> 
     <span className="filter-text">Sort: </span>
     
     <select>
     <option selected >Newest</option>
     <option>Price (increasing)</option>
     <option>Price (decreasing)</option>
     </select>

     </div>
     </div>
    <Products/>
    <Newsletter/>
    <Footer/>
    </div>
  )
}

export default ProductList;