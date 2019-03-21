import axios from 'axios';

export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const getAllPosts = () => dispatch => {
  dispatch ({ type: GET_ALL_POSTS });
  axios
    .get('http://localhost:5000/api/posts')
    .then(res => {
      dispatch({ 
        type: SUCCESS, 
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
    .get('http://localhost:5000/api/users')
    .then(res => {
      dispatch({ 
        type: SUCCESS, 
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