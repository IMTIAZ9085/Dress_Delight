import React from 'react';
import "./singleproduct.css";
import {Search,LocalMallOutlined,ThumbUpAlt} from "@material-ui/icons";

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
                        <Search/>
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