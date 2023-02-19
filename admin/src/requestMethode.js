import axios from "axios";

const BASE_URL = "http://localhost:5000/api";


export const publicRequest = axios.create({
      baseURL: BASE_URL,
});

// let TOKEN ;
// if(localStorage.getItem("persist:root")!=null){
//  const TOKEN =JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.data.Token;
// const kk =JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser;

const TOKEN = localStorage.getItem("authToken");
// console.log(kk);
// }


export const userRequest = axios.create({
      baseURL: BASE_URL,
      headers: {token:`Bearer ${TOKEN}`},
});
