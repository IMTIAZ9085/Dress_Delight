import React from 'react'
import "./widgel.css";
const WidgeL = () => {

 const Button = ({type}) =>{
      return <button className={"wl-btn "+type}>{type}</button>
 }
  return (
    <div className="widgeL">
    <h3 className="wl-title">Transaction History</h3>
    <table className="wl-table">
      <tr className="wl-tr">
      <th className="wl-th">Customer</th>
      <th className="wl-th">Date</th>
      <th className="wl-th">Amout</th>
      <th className="wl-th">Status</th>
      </tr>

      <tr className="wl-tr">
      <td className="wl-User">
            <img src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2017-09/shutterstock_243101992.jpg?itok=nKwkA392" alt="" className="wl-img" />
            <span className="wl-name">Khadija Islam</span>
      </td>
      <td className="wl-date">
            12 Jan 2023
      </td>
      <td className="wl-amount">
            $344.3
      </td>
      <td className="wl-status">
       <Button type="Approved"/>
      </td>
      </tr>


      <tr className="wl-tr">
      <td className="wl-User">
            <img src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2017-09/shutterstock_243101992.jpg?itok=nKwkA392" alt="" className="wl-img" />
            <span className="wl-name">Khadija Islam</span>
      </td>
      <td className="wl-date">
            12 Jan 2023
      </td>
      <td className="wl-amount">
            $344.3
      </td>
      <td className="wl-status">
       <Button type="Pending"/>
      </td>
      </tr>


      <tr className="wl-tr">
      <td className="wl-User">
            <img src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2017-09/shutterstock_243101992.jpg?itok=nKwkA392" alt="" className="wl-img" />
            <span className="wl-name">Khadija Islam</span>
      </td>
      <td className="wl-date">
            12 Jan 2023
      </td>
      <td className="wl-amount">
            $344.3
      </td>
      <td className="wl-status">
       <Button type="Approved"/>
      </td>
      </tr>


      <tr className="wl-tr">
      <td className="wl-User">
            <img src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2017-09/shutterstock_243101992.jpg?itok=nKwkA392" alt="" className="wl-img" />
            <span className="wl-name">Khadija Islam</span>
      </td>
      <td className="wl-date">
            12 Jan 2023
      </td>
      <td className="wl-amount">
            $344.3
      </td>
      <td className="wl-status">
       <Button type="Decline"/>
      </td>
      </tr>

    </table>
    </div>
  )
}

export default WidgeL;