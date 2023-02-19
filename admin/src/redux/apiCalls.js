import {
   useNavigate
} from "react-router-dom";
import {
   publicRequest,
   userRequest
} from "../requestMethode.js";
import {
   addProductFailure,
   addProductStart,
   addProductSuccess,
   deleteProductFailure,
   deleteProductStart,
   deleteProductSuccess,
   getProductFailure,
   getProductStart,
   getProductSuccess,
   updateProductFailure,
   updateProductStart,
   updateProductSuccess
} from "./productRedux.js";
import {
   loginFailure,
   loginStart,
   loginSuccess
} from "./userRedux.js";

//user login system implementation
export const login = async (dispatch, user) => {
   // const navigate = useNavigate();
   dispatch(loginStart);

   try {
      const res = await publicRequest.post("/auth/login", user);
      console.log(res);
      localStorage.setItem("authToken", res.data.data.Token);
      dispatch(loginSuccess(res.data));
      // navigate("/");
   } catch {
      dispatch(loginFailure);
   }
};

//GET ALL PRODUCTS
export const getProducts = async (dispatch) => {
   dispatch(getProductStart());

   try {
      const res = await publicRequest.get("/products/");
      console.log(res);
      dispatch(getProductSuccess(res.data));
   } catch (e) {
      dispatch(getProductFailure());
   }
};

//DELETE particular PRODUCTS
export const delProducts = async (id, dispatch) => {
   dispatch(deleteProductStart());

   try {
      const res = await userRequest.delete(`/products/${id}`);
      console.log(res);
      dispatch(deleteProductSuccess(id));
   } catch (e) {
      dispatch(deleteProductFailure());
   }
}

//UPDATE particular PRODUCTS
export const updateProducts = async (id, product, dispatch) => {
   dispatch(updateProductStart());

   try {
      const res = await userRequest.put(`/products/${id}`);
      console.log(res);
      dispatch(updateProductSuccess({
         id,
         product
      }));
   } catch (e) {
      dispatch(updateProductFailure());
   }
}


//CREATE particular PRODUCTS
export const addProducts = async (product, dispatch) => {
   dispatch(addProductStart());

   try {
      const res = await userRequest.post(`/products/registerProduct`, product);
      console.log(res);
      dispatch(addProductSuccess(res.data));
   } catch (e) {
      dispatch(addProductFailure());
   }
}




// router.route("/registerProduct").post(tokenAdminAuthorization, registerProduct);
// router.route("/:id").put(tokenAdminAuthorization, updateProduct);
// router.route("/:id").delete(tokenAdminAuthorization, deleteProduct);
// router.route("/find/:id").get(getProduct);
// router.route("/").get(getAllProduct);