import { Button, Input } from '@material-ui/core';
import {  PublishOutlined } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../component/chart/Chart';
import { newdata, productData,userdata } from '../../data';
import "./product.css";


const Product = () => {
  return (
    <div className="product">
      <div className="p-title-cont">
            <h1 className="p-title">Product</h1>
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
            <img src="https://m.media-amazon.com/images/I/81uHJImFdAL._UL1500_.jpg" alt="" className="p-info-img" />
            <span className="p-name">Fastrack Sunglass</span>

      </div>
      <div className="p-info-bottom">
            <div className="p-info-item">
            <span className="p-info-key">id:</span>
            <span className="p-info-value">129</span>
            </div>

            <div className="p-info-item">
            <span className="p-info-key">Sales:</span>
            <span className="p-info-value">435</span>
            </div>

            <div className="p-info-item">
            <span className="p-info-key">active:</span>
            <span className="p-info-value">yes</span>
            </div>

            <div className="p-info-item">
            <span className="p-info-key">Stock:</span>
            <span className="p-info-value">144</span>
            </div>
      </div>
      </div>
      </div>

      <div className="p-bottom">
        <form  className="p-form">
        <div className="p-form-left">
          <label>Product Name</label>
          <Input type="text" name="actice" placeholder="air shoes"/>
          <label>In Stock</label>
          <select name="instock" id="idstock">
          <option value="yes">YES</option>
          <option value="no">NO</option>
          </select>

          <label>Active</label>
          <select name="active" id="active">
          <option value="yes">YES</option>
          <option value="no">NO</option>
          </select>

        </div>

        <div className="p-form-right">
        <div className="p-upload">
          <img className="p-upload-img" src="https://m.media-amazon.com/images/I/81uHJImFdAL._UL1500_.jpg" alt="p-u" />
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