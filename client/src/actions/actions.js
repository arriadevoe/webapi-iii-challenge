import axios from 'axios';

export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_POSTS_BY_USER = 'GET_POSTS_BY_USER';
export const CREATE_NEW_POST = 'CREATE_NEW_POST';
export const SUCCESS_GET_ALL_POSTS = 'SUCCESS_GET_ALL_POSTS';
export const SUCCESS_GET_ALL_USERS = 'SUCCESS_GET_ALL_USERS';
export const SUCCESS_GET_POSTS_BY_USER = 'SUCCESS_GET_POSTS_BY_USER';
export const SUCCESS_CREATE_NEW_POST = 'SUCCESS_CREATE_NEW_POST';
export const FAILURE = 'FAILURE';

const heroku = 'https://riddles-in-the-dark-blog.herokuapp.com';

export const createNewPost = postData => dispatch => {
  dispatch ({ type: CREATE_NEW_POST });
  axios
    .post(`${heroku}/api/posts`, postData)
    .then(res => {
      dispatch({ 
        type: SUCCESS_CREATE_NEW_POST, 
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

export const getAllPosts = () => dispatch => {
  dispatch ({ type: GET_ALL_POSTS });
  axios
    .get(`${heroku}/api/posts`)
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
    .get(`${heroku}/api/users`)
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
    .get(`${heroku}/api/users/${id}/posts`)
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
