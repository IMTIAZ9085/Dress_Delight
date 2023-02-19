import './App.css';
import Sidebar from './component/sidebar/Sidebar';
import Topbar from './component/topbar/Topbar';
import Home from './Pages/home/Home';
import { BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom';
import Userlist from './Pages/usersList/Userlist';
import User from './Pages/user/User';
import Newuser from './Pages/newuser/Newuser';
import Productlist from './Pages/productList/Productlist';
import Product from './Pages/product/Product';
import Newproduct from './Pages/newproduct/Newproduct';
import Login from './Pages/login/Login';
import { useEffect } from 'react';


function App() {
  // const navigate = useNavigate();
  // if(!localStorage.getItem("authToken"))
  //   navigate("/login");
  // const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.data.isAdmin;
  const admin = localStorage.getItem("authToken")?true:false;
//  const navigate = useNavigate();
  // if(!admin) navigate("/login");
  // useEffect(()=>{
  //  if(!localStorage.getItem("authToken"))
  //   navigate("/login");
  // },[navigate]);
  return (
    <BrowserRouter>

    
   
    <div className="App">

    {/* <Routes> */}
    {/* <Route exact path="/login" element={<Login/>}></Route>    */}
    {/* </Routes> */}
    

    {/* {admin && <> */}
    <Topbar/>
    <div className="app-container">
     <Sidebar/>
     <Routes>
     <Route exact path="/" element={<Login/>}></Route> 
     <Route exact path="/home" element={<Home/>}></Route> 
     <Route exact path="/users" element={<Userlist/>}></Route> 
     <Route exact path="/user/:userid" element={<User/>}></Route> 
     <Route exact path="/newUser" element={<Newuser/>}></Route> 
    
     <Route exact path="/products" element={<Productlist/>}></Route> 
     <Route exact path="/product/:productid" element={<Product/>}></Route> 
     <Route exact path="/newProduct" element={<Newproduct/>}></Route> 

   
     </Routes>
      {/* <Home/> */}
    </div>
     

 {/* </>} */}

    </div>

    </BrowserRouter>
  );
}

export default App;
