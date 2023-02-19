import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect } from 'react';
import "./productlist.css";
import {DeleteOutline, LaptopWindows} from "@material-ui/icons";
import { Button } from "@mui/material";
import {Productrows } from "../../data";
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import {useDispatch,useSelector} from "react-redux";
import { getProductFailure } from '../../redux/productRedux';
import { delProducts, getProducts } from '../../redux/apiCalls';
import axios from 'axios';

const Productlist = () => {
  const navigate = useNavigate();
  if(localStorage.getItem("authToken")==null){
    navigate("/");
  }
      const [data,setData] = useState(Productrows);
      const dispatch = useDispatch();
      const products = useSelector((state)=>state.product.products.data);

    useEffect(()=>{
      if(localStorage.getItem("authToken")==null){
        navigate("/");
      }else{
        getProducts(dispatch);
      }
    },[dispatch]);

    const token = localStorage.getItem("authToken");

      const handledlt = async(id)=>{
            // setData(data.filter((item)=> item.id!==id));
            // delProducts(id,dispatch);
            try{
            //   const res = await axios.delete(`/api/products/del/${id}`,{
            //     headers: {token:`Bearer ${token}`},
            // });
            const res = await axios.delete(`/api/products/del/${id}`);
            window.location.reload();
        
              console.log(res);
            }catch(e){
             console.log(e);
            }
           };

           const columns = [
            { field: '_id', headerName: 'ID', width: 230 },
            { field: 'product', headerName: 'Product', width: 200,renderCell:(params)=>{ 
                  return (
                        <div className="render-cell-style">
                              <img className="pl-ls-img" src={params.row.img} alt="" />
                              {params.row.title}
                        </div>
                  )
            } },
            { field: 'instock', headerName: 'Stock', width: 200 },
          
            {
                  field: "price",
                  headerName: 'Price',
                  width: 100,
                },
            {
                  field: "action",
                  headerName: 'Action',
                  width: 150,
                  renderCell: (params)=>{
                    return(
                        <>
                         <Link style={{textDecoration:"none"}} to={"/product/"+params.row._id}>
                        <Button className="pl-ls-edit">Edit</Button>
                        </Link>
                        {/* <button type="button" >Edit</button> */}
                        <DeleteOutline className="pl-ls-dlt" onClick={() => handledlt(params.row._id)}/>
                       </>
                    )
                  }
                },
            
          ];
          




  return (
    <div className="productlist">
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={5}
        checkboxSelection
      />
    </div>
  )
}

export default Productlist;