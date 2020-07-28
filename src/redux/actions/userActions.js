/*import uniCampusApi from "../../api/index"

import { 
  USER_EMAIL,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_SUCCESS
 } from './actionTypes';


export const get_user_email = () => ({
  type: USER_EMAIL
});


export const fetchProductsPending =()=> ({
        type: FETCH_PRODUCTS_PENDING
    
})
export const fetchProductsSuccess =(products)=> ({
  type: FETCH_PRODUCTS_SUCCESS,
  products: products

})
export const fetchProductsError =(error)=> ({
  type: FETCH_PRODUCTS_PENDING,
  error: error

})

export const getPost = (dispatch) => {
  return async () => {
      const response = await uniCampusApi.get("/api/feed")

      dispatch({ type: "get_post", payload: response.data})
      
  }
}
function getUserData() {
  return dispatch => {
      dispatch(fetchProductsPending());
      fetch('https://exampleapi.com/products')
      .then(res => res.json())
      .then(res => {
          if(res.error) {
              throw(res.error);
          }
          dispatch(fetchProductsSuccess(res.products);
          return res.products;
      })
      .catch(error => {
          dispatch(fetchProductsError(error));
      })
  }
}

*/