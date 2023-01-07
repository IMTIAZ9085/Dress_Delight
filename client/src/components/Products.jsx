import React from 'react'
import "./products.css";
import { popularProducts } from '../data';
import SingleProduct from './SingleProduct';



const Products = () => {
  return (
    <>
    <div className="pt-head">
       <h1 className="product-cont-header">POPULAR TRENDING</h1>
          <br />
          </div>
    <div className="product-cont">
         

      {
            popularProducts.map((item)=>(
                  <SingleProduct item={item} key={item.id}/>
            ))
      }
    </div>
    </>
  )
}

export default Products;