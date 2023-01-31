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


function App() {
  return (
    <BrowserRouter>
   
    <div className="App">
    <Topbar/>
    <div className="app-container">
     <Sidebar/>
     <Routes>
     <Route exact path="/" element={<Home/>}></Route> 
     <Route exact path="/users" element={<Userlist/>}></Route> 
     <Route exact path="/user/:userid" element={<User/>}></Route> 
     <Route exact path="/newUser" element={<Newuser/>}></Route> 
    
     <Route exact path="/products" element={<Productlist/>}></Route> 
     <Route exact path="/product/:productid" element={<Product/>}></Route> 
     <Route exact path="/newProduct" element={<Newproduct/>}></Route> 

     </Routes>
      {/* <Home/> */}
    </div>
     


    {/* <Navbar/> */}
     {/* <Routes> */}
     {/* <PrivateRoute exact path="/" element={<PrivateScreen/>}/> */}
     {/* <Route exact path="/login" element={<Login/>}></Route> */}
     {/* <Route exact path="/login" element={user ? navigate("/") : <Register />}
></Route> */}
     {/* register */}
     {/* <Route exact path="/register" element={<Register/> }></Route>
     <Route exact path="/cart" element={<Cart/>} ></Route>
     <Route exact path="/product/:id" element={<Product/>} ></Route>
     <Route exact path="/product_List/:category" element={<ProductList/>} ></Route>
     <Route exact path="/success" element={<Success/>} ></Route>
     <Route  path="*" element={<NotFound/>}></Route> */}
     {/* <Route exact path="/forgetPassword" element={<ForgotPasswordScreen/>}></Route>
     <Route exact path="/resetPassword/:resetToken" element={<ResetPasswordScreen/>}></Route> */}
     {/* <Route exact path="/createEvents" element={<CreateEvents/>}></Route>
     <Route exact path="/events/:_id" element={<Eachevents/>}></Route>
     <Route exact path="/about" element={<About/>}></Route> */}
     {/* <Route exact path="/invite" element={<Invite/>}></Route> */}
     {/* <Route exact path="/invitation" element={<Myinvite/>}></Route>
     <Route  path="*" element={<NotFound/>}></Route> */}
     
     {/* </Routes> */}
     {/* <footer/> */}
   


    </div>

    </BrowserRouter>
  );
}

export default App;
