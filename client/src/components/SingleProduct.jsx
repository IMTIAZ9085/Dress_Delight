import React from 'react';
import "./singleproduct.css";
import {Search,LocalMallOutlined,ThumbUpAlt} from "@material-ui/icons";
import { Link } from 'react-router-dom';

const SingleProduct = ({item}) => {
  return (
    <div>
      <div className="singleP-cont">
        <div className="circle"></div>
            <img src={item.img} alt="product"/>
            <div className="product-info">
                  <div className="P-icon">
                        <LocalMallOutlined/>
                  </div>
                  <div className="P-icon">
                  <Link to={`/product/${item._id}`}>
                        <Search/>
                        </Link>
                  </div>
                  <div className="P-icon">
                        <ThumbUpAlt/>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default SingleProduct;