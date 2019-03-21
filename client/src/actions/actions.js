import axios from 'axios';

export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const SUCCESS_POSTS = 'SUCCESS_POSTS';
export const SUCCESS_USERS = 'SUCCESS_USERS';
export const FAILURE = 'FAILURE';

const port = 4000;

export const getAllPosts = () => dispatch => {
  dispatch ({ type: GET_ALL_POSTS });
  axios
    .get(`http://localhost:${port}/api/posts`)
    .then(res => {
      dispatch({ 
        type: SUCCESS_POSTS, 
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: FAILURE,
        payload: err.response
      })
    })
}

export const getAllUsers = () => dispatch => {
  dispatch ({ type: GET_ALL_USERS });
  axios
    .get(`http://localhost:${port}/api/users`)
    .then(res => {
      dispatch({ 
        type: SUCCESS_USERS, 
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: FAILURE,
        payload: err.response
      })
    })
}