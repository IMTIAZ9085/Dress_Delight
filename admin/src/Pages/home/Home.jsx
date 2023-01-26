import React from 'react'
import Chart from '../../component/chart/Chart';
import Info from '../../component/Info/Info';
import { userdata } from '../../data';
import "./home.css";

const Home = () => {
  return (
    <div className="home">
     
    <Info/>
    <Chart data={userdata} title="User Analytics" grid datakey="Active User"/>
    </div>
  )
}

export default Home;