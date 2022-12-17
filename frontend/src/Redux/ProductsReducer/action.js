import * as types from "./actionTypes";
import axios from "axios";

const getProductsRequest = () => {
  return {
    type: types.GET_PRODUCTS_REQUEST,
  };
};

const getProducts = (queryParams) => (dispatch) => {
  
  dispatch(getProductsRequest());
  return axios
    .get(`http://localhost:7070/data`, queryParams)
    .then((res) => {
      console.log('hello')
      dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data });
    })
    .catch(dispatch({ type: types.GET_PRODUCTS_FAILURE }));
};

export { getProducts };








/*
const getMusicSuccess = (payload)=>{
    return {
        type: types.GET_MUSIC_SUCCESS,
        payload
    }
}

const getMusicFailure = ()=>{
    return {
        type: types.GET_MUSIC_FAILURE
    }
}


const getMusic = (dispatch) => {
axios
.get(`http://localhost:8080/albums`)
.then((res)=> dispatch(getMusicSuccess(res.data)))
}
*/
