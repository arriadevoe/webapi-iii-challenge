import {
  GET_ALL_POSTS,
  GET_ALL_USERS,
  SUCCESS_POSTS,
  SUCCESS_USERS,
  FAILURE,
} from '../actions/actions';

const initialState = {
  posts: [],
  userList: [],
  gettingPosts: false,
  gettingUsers: false,
  error: null,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        gettingPosts: true,
        error: null,
      }
      case GET_ALL_USERS:
      return {
        ...state,
        gettingUsers: true,
        error: null,
      }
    case SUCCESS_POSTS:
      return {
        ...state,
        posts: action.payload,
        gettingPosts: false,
        error: null,
      }
    case SUCCESS_USERS:
      return {
        ...state,
        userList: action.payload,
        gettingUsers: false,
        error: null,
      }
    case FAILURE:
      return {
        ...state,
        gettingPosts: false,
        gettingUsers: false,
        error: action.payload,
      }
    default:
      return state
  }
}