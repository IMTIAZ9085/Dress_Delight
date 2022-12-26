import React from 'react'
import "./categories.css";
import { categories } from '../data';
import Categoryitem from './Categoryitem';

const Categories = () => {
  return (
    <div className="categories-cont">
      {
            categories.map((item)=>(
             <Categoryitem/>
            ))
      }
    </div>
  )
}

export default Categories;