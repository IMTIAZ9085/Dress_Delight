import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import "./productlist.css";
// import { MenuItem, Select } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const ProductList = () => { 
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filter,setFilter] = useState({});
  const [sort,setSort] = useState("newest");

  const handleFilters = (e) =>{
    const value = e.target.value
    setFilter({
      ...filter,
      [e.target.name] : value
    })
  }
  console.log(filter);
  
  return (
    <div className="product-list-page-cont">
     <Navbar/>
     <Announcement/>

     <h1 className="pp-title">Category : {cat}</h1>

     <div className="filter-cont">
     <div className="filter"> 
      <span className="filter-text">Filter: </span> 
      <select name="color" onChange={handleFilters}>
     <option disabled >color</option>
     <option>blue</option>
     <option>white</option>
     <option>black</option>
     <option>red</option>
     <option>yellow</option>
     <option>green</option>
     </select>

     <select name="size" onChange={handleFilters}>
     <option disabled >Size</option>
     <option>S</option>
     <option>M</option>
     <option>XS</option>
     <option>XL</option>
     <option>L</option>
     </select>

      </div>
    


     <div className="filter"> 
     <span className="filter-text">Sort: </span>
     
     <select onChange={(e)=>setSort(e.target.value)}>
     <option value="newest" >Newest</option>
     <option value="asc">Price (increasing)</option>
     <option value="dsc">Price (decreasing)</option>
     </select>

     </div> 
     </div>
    <Products cat={cat} filter={filter} sort={sort}/>
    <Newsletter/>
    <Footer/>
    </div>
  )
}

export default ProductList;