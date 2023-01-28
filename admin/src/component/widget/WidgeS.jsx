import { Visibility } from '@material-ui/icons';
import React from 'react'
import "./widges.css";

const WidgeS = () => {
  return (
    <div className="widges">
     <span className="ws-title">NEW JOINED MEMBERS</span>
     <ul className="ws-list">

      <li className="ws-list-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSly0txX3sRodpDz5r6KSUwalEsKE9uxNJk9Q&usqp=CAU" alt="userImg" />
            <div className="ws-user">
            <span className="ws-username">Sk Imtiaz</span>
            <span className="ws-job">Blockchain developer</span>
            </div>
            <button className="ws-btn">
                  <Visibility/>
                  View
            </button>
      </li>

      <li className="ws-list-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSly0txX3sRodpDz5r6KSUwalEsKE9uxNJk9Q&usqp=CAU" alt="userImg" />
            <div className="ws-user">
            <span className="ws-username">Sk Imtiaz</span>
            <span className="ws-job">Blockchain developer</span>
            </div>
            <button className="ws-btn">
                  <Visibility/>
                  View
            </button>
      </li>

      <li className="ws-list-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSly0txX3sRodpDz5r6KSUwalEsKE9uxNJk9Q&usqp=CAU" alt="userImg" />
            <div className="ws-user">
            <span className="ws-username">Sk Imtiaz</span>
            <span className="ws-job">Blockchain developer</span>
            </div>
            <button className="ws-btn">
                  <Visibility/>
                  View
            </button>
      </li>

      <li className="ws-list-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSly0txX3sRodpDz5r6KSUwalEsKE9uxNJk9Q&usqp=CAU" alt="userImg" />
            <div className="ws-user">
            <span className="ws-username">Sk Imtiaz</span>
            <span className="ws-job">Blockchain developer</span>
            </div>
            <button className="ws-btn">
                  <Visibility/>
                  View
            </button>
      </li>

      <li className="ws-list-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSly0txX3sRodpDz5r6KSUwalEsKE9uxNJk9Q&usqp=CAU" alt="userImg" />
            <div className="ws-user">
            <span className="ws-username">Sk Imtiaz</span>
            <span className="ws-job">Blockchain developer</span>
            </div>
            <button className="ws-btn">
                  <Visibility/>
                  View
            </button>
      </li>


     </ul>
    </div>
  )
}

export default WidgeS;