import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";
import {useNavigate} from "react-router-dom";

const Success = () => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  // const data = location.state.data;
  // const cart = location.state.products;
  const orderId = location.state.orderId;
  // const currentUser = useSelector((state) => state.user.currentUser);
  // const [orderId, setOrderId] = useState(null);
  // console.log(currentUser);

  // useEffect(() => {
  //   const createOrder = async () => {
  //     try {
  //       const res = await userRequest.post("/orders/order_Product/63b5a2f401407ff364787b91", {
  //         userId: "63b5a2f401407ff364787b91",
  //         products: cart.products.map((item) => ({
  //           productId: item._id,
  //           quantity: item.quantity,
  //         })),
  //         amount: cart.total_price,
  //         // address: data.billing_details.address,
  //         // address: data.shipping,
  //         address:"burdwan",
  //       });
  //       setOrderId(res.data._id);

  //       console.log(res);
        
  //     } catch(e)
  //      {console.log(e);}
  //   };

  //   data && cart && createOrder();
  // }, [cart, data]);

  const goHome=async() => {
    navigate("/");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <button style={{ padding: 10, marginTop: 20 }}
      onClick={goHome}
      >Go to Homepage</button>
    </div>
  );
};

export default Success;