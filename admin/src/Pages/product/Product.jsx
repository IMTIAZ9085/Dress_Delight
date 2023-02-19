import { Button, Input } from '@material-ui/core';
import {  PublishOutlined } from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Chart from '../../component/chart/Chart';
import { newdata, productData,userdata } from '../../data';
import "./product.css";


const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
 const product = useSelector(state=>state.product.products.data.find(product=>product._id === productId));
//  console.log(product);

  return (
    <div className="product">
      <div className="p-title-cont">
            <h1 className="p-title">{product.title}</h1>
            <Link to="/newProduct" className="link">
            <Button className="p-add-btn">Create</Button>
            </Link>
      </div>


      <div className="p-top">    
      <div className="p-top-left">
      <Chart data={userdata} title="Sales Performance" grid dataKey="Active User" />
      </div>
      <div className="p-top-right">
      <div className="p-info-top">
            <img src={product.img} alt="" className="p-info-img" />
            <span className="p-name">{product.title}</span>

      </div>
      <div className="p-info-bottom">
            <div className="p-info-item">
            <span className="p-info-key">id:</span>
            <span className="p-info-value">{product._id}</span>
            </div>

            <div className="p-info-item">
            <span className="p-info-key">Sales:</span>
            <span className="p-info-value">435</span>
            </div>


            <div className="p-info-item">
            <span className="p-info-key">Price:</span>
            <span className="p-info-value">{product.price}</span>
            </div>

      

            <div className="p-info-item">
          { product.instock &&
            <span className="p-info-key">InStock</span>}
            {/* <span className="p-info-value"></span> */}
            </div>
      </div>
      </div>
      </div>

      <div className="p-bottom">
        <form  className="p-form">
        <div className="p-form-left">
          <label>Product Name</label>
          <Input type="text" name="actice" placeholder={product.title}/>
          
          <label>Product Description</label>
          <Input type="text" name="actice" placeholder={product.desc}/>

          <label>Product Price</label>
          <Input type="text" name="actice" placeholder={product.price}/>

          <label>In Stock</label>
          <select name="instock" id="idstock">
          <option value="true">YES</option>
          <option value="false">NO</option>
          </select>

        

        </div>

        <div className="p-form-right">
        <div className="p-upload">
          <img className="p-upload-img" src={product.img} alt="p-u" />
          <label for="file">
            <PublishOutlined/>
          </label>
          <Input type="file" id="file" style={{display: "none"}}/>
        </div>
         <Button className="p-btn">Update</Button>
        </div>
      
        </form>
      </div>


    </div>
  )
}

export default Product;