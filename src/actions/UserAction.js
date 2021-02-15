import {
    CREATE_USER,
    // GET_USER,
    UPDATE_USER,
    } from "../constant/types";

  // actions
  export const addUser = (user) => (dispatch) =>  dispatch({
    type: CREATE_USER,
    payload: user,
  });
  
  // // get a user
  // export const getUser = (id) => ({
  //   type: GET_USER,
  //   payload: id,
  // });
  
  // update a user
  export const updateUser = (user) => (dispatch) =>  dispatch({
    type: UPDATE_USER,
    payload: user,
  });
  