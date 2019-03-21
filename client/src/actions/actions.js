import axios from 'axios';

export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_POSTS_BY_USER = 'GET_POSTS_BY_USER';
export const SUCCESS_GET_ALL_POSTS = 'SUCCESS_GET_ALL_POSTS';
export const SUCCESS_GET_ALL_USERS = 'SUCCESS_GET_ALL_USERS';
export const SUCCESS_GET_POSTS_BY_USER = 'SUCCESS_GET_POSTS_BY_USER'
export const FAILURE = 'FAILURE';

const port = 4000;

export const getAllPosts = () => dispatch => {
  dispatch ({ type: GET_ALL_POSTS });
  axios
    .get(`http://localhost:${port}/api/posts`)
    .then(res => {
      dispatch({ 
        type: SUCCESS_GET_ALL_POSTS, 
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
        type: SUCCESS_GET_ALL_USERS, 
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

export const getPostsByUser = (id) => dispatch => {
  dispatch ({ type: GET_POSTS_BY_USER });
  axios
    .get(`http://localhost:${port}/api/users/${id}/posts`)
    .then(res => {
      dispatch({ 
        type: SUCCESS_GET_POSTS_BY_USER, 
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