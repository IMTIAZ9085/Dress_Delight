import React from 'react'
import "./categories.css";
import { categories } from '../data';
import Categoryitem from './Categoryitem';

const Categories = () => {
  return (
    <>
      <div className="cat-head">
       <h1 className="cat-cont-header">CATEGORIES</h1>
          <br />
          </div>
 
    <div className="categories-cont">
      {
            categories.map((item)=>(
             <Categoryitem item={item} key={item.id}/>
            ))
      }
    </div>
    </>
  )
}

export default Categories;