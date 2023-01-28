import React from 'react'
import Chart from '../../component/chart/Chart';
import Info from '../../component/Info/Info';
import WidgeS from '../../component/widget/WidgeS';
import WidgeL from '../../component/widget/WidgeL';
import { userdata } from '../../data';
import "./home.css";

const Home = () => {
  return (
    <div className="home">
     
    <Info/> 
    <Chart data={userdata} title="User Analytics" grid datakey="Active User"/>
    <div className="h-widgets">
      <WidgeS/>
      <WidgeL/>
    </div>
    </div>
  )
}

export default Home;