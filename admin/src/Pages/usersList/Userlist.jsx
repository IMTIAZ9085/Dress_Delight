// import React from 'react';
import "./userlist.css";
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from "@material-ui/icons";
import { Button } from "@mui/material";
import { rows } from "../../data";
import {Link} from "react-router-dom";
import { useState } from "react";
const Userlist = () => {
      const [data,setData] = useState(rows);
      const columns = [
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'userName', headerName: 'Username', width: 200,renderCell:(params)=>{ 
                  return (
                        <div className="render-cell-style">
                              <img className="us-ls-img" src={params.row.avatar} alt="" />
                              {params.row.userName}
                        </div>
                  )
            } },
            { field: 'email', headerName: 'Email', width: 200 },
            {
                  field: 'transaction',
                  headerName: 'Transaction',
                  width: 160
                },
            {
              field: "status",
              headerName: 'Status',
              width: 100,
            },
            {
                  field: "action",
                  headerName: 'Action',
                  width: 150,
                  renderCell: (params)=>{
                    return(
                        <>
                         <Link to={"/user/"+params.row.id}>
                        <Button className="us-ls-edit">Edit</Button>
                        </Link>
                        {/* <button type="button" >Edit</button> */}
                        <DeleteOutline className="us-ls-dlt" onClick={() => handledlt(params.row.id)}/>
                       </>
                    )
                  }
                },
            
          ];
          
        
const handledlt = (id)=>{
 setData(data.filter((item)=> item.id!==id));
}

  return (
    <div className="userlist">
    Userlist

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

export default Userlist