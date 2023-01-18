import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import { BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import Success from './pages/Success';
import NotFound from './components/NotFound';

function App() {
  // const navigate = useNavigate();
  // let user = true;
  return (
    <BrowserRouter>
    <div className="App"> 
    {/* <Navbar/> */}
     <Routes>
     {/* <PrivateRoute exact path="/" element={<PrivateScreen/>}/> */}
     <Route exact path="/" element={<Home/>}></Route> 
     <Route exact path="/login" element={<Login/>}></Route>
     {/* <Route exact path="/login" element={user ? navigate("/") : <Register />}
></Route> */}
     {/* register */}
     <Route exact path="/register" element={<Register/> }></Route>
     <Route exact path="/cart" element={<Cart/>} ></Route>
     <Route exact path="/product/:id" element={<Product/>} ></Route>
     <Route exact path="/product_List/:category" element={<ProductList/>} ></Route>
     <Route exact path="/success" element={<Success/>} ></Route>
     <Route  path="*" element={<NotFound/>}></Route>
     {/* <Route exact path="/forgetPassword" element={<ForgotPasswordScreen/>}></Route>
     <Route exact path="/resetPassword/:resetToken" element={<ResetPasswordScreen/>}></Route> */}
     {/* <Route exact path="/createEvents" element={<CreateEvents/>}></Route>
     <Route exact path="/events/:_id" element={<Eachevents/>}></Route>
     <Route exact path="/about" element={<About/>}></Route> */}
     {/* <Route exact path="/invite" element={<Invite/>}></Route> */}
     {/* <Route exact path="/invitation" element={<Myinvite/>}></Route>
     <Route  path="*" element={<NotFound/>}></Route> */}
     
     </Routes>
     {/* <footer/> */}
    </div>
 </BrowserRouter>
  );
}

export default App;
