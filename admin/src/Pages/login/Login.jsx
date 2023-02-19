import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/apiCalls";
import "./login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

         
  useEffect(()=>{
    if(localStorage.getItem("authToken")){
          navigate("/home");
    }
},[navigate]);


  const handleClick =async(e) => {
    e.preventDefault();
    // login(dispatch, { email, password });
    try{
      const res =await axios.post('/api/auth/login',{email, password });
      localStorage.setItem("authToken",res.data.data.Token);
      if(res.data.data.isAdmin===true){
        // window.location.reload();
        navigate("/home"); 
      }else{
        console.log("NOT A ADMIN");
      }
      console.log(res);
    }catch(err){
      console.log(err);
    }
   
    
  };
  
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flex:"10",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick} style={{ padding: 10, width:100 }}>
        Login
      </button>
    </div>
  );
};

export default Login;