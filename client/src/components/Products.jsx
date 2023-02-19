import React, { useState } from 'react'
import "./products.css";
import { popularProducts } from '../data';
import SingleProduct from './SingleProduct';
import { useEffect } from 'react';
import axios from 'axios';



const Products = ({cat,filter,sort}) => {
  const [products,setProducts] = useState([]);
  const [filteredProducts,setFilteredProducts] = useState([]);

  //get proper categories product
  useEffect(() => {
    const getproduct = async()=>{
      try{
        const res = await axios.get(cat ? `/api/products?category=${cat}` : `/api/products?`);
        // console.log(res.data.data);
        setProducts(res.data.data);
      }catch(err){
        console.log(err);
      }
    }

    getproduct();
  },[cat]);

  //setting the filtered product for the current sorted product according the color and size
  useEffect(() => {
   cat && setFilteredProducts(
    products.filter((item) => 
    Object.entries(filter).every(([key,value]) =>
    item[key].includes(value))
    )
   )
  //  console.log(filteredProducts);

  },[cat,filter,products]);


  //this useeffect is use for filtering the product according to their price values
  useEffect(() => {
  if( sort === "newest" ){
    setFilteredProducts((prev)=>
    [...prev].sort((a,b) => a.createdAt - b.createdAt)
    );
    // console.log(filteredProducts);

  }else if( sort === "asc"){
    setFilteredProducts((prev)=>
    [...prev].sort((a,b) => a.price - b.price)
    );
    // console.log(filteredProducts);
  }else{
    setFilteredProducts((prev)=>
    [...prev].sort((a,b) => b.price - a.price)
    );
    // console.log(filteredProducts);/
  }
   },[sort]);
 
  return (
    <>
    <div className="pt-head">
       <h1 className="product-cont-header">POPULAR TRENDING</h1>
          <br />
          </div>
    <div className="product-cont">
         

      { 
        cat ? 
        filteredProducts.map((item)=>(
                  <SingleProduct item={item} key={item.id}/>
            )) :  products.slice(0,9).map((item)=>(
                  <SingleProduct item={item} key={item.id}/>
            ))
      }
    </div>
    </>
  )
}

export default Products;