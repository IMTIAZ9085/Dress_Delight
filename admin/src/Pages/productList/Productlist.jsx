import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import "./productlist.css";
import {DeleteOutline} from "@material-ui/icons";
import { Button } from "@mui/material";
import {Productrows } from "../../data";
import {Link} from "react-router-dom";
import { useState } from "react";

const Productlist = () => {
      const [data,setData] = useState(Productrows);
      const handledlt = (id)=>{
            setData(data.filter((item)=> item.id!==id));
           }

           const columns = [
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'product', headerName: 'Product', width: 200,renderCell:(params)=>{ 
                  return (
                        <div className="render-cell-style">
                              <img className="pl-ls-img" src={params.row.avatar} alt="" />
                              {params.row.name}
                        </div>
                  )
            } },
            { field: 'stock', headerName: 'Stock', width: 200 },
            {
              field: "status",
              headerName: 'Status',
              width: 100,
            },
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
                         <Link style={{textDecoration:"none"}} to={"/product/"+params.row.id}>
                        <Button className="pl-ls-edit">Edit</Button>
                        </Link>
                        {/* <button type="button" >Edit</button> */}
                        <DeleteOutline className="pl-ls-dlt" onClick={() => handledlt(params.row.id)}/>
                       </>
                    )
                  }
                },
            
          ];
          




  return (
    <div className="productlist">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default Productlist;