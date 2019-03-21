import {
  GET_ALL_POSTS,
  GET_ALL_USERS,
  GET_POSTS_BY_USER,
  CREATE_NEW_POST,
  SUCCESS_GET_ALL_POSTS,
  SUCCESS_GET_ALL_USERS,
  SUCCESS_GET_POSTS_BY_USER,
  SUCCESS_CREATE_NEW_POST,
  FAILURE
} from "../actions/actions";

const initialState = {
  posts: [],
  userList: [],
  userPostsLoaded: false,
  gettingPosts: false,
  gettingUsers: false,
  creatingPost: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        gettingPosts: true,
        userPostsLoaded: false,
        error: null
      };
    case CREATE_NEW_POST:
      return {
        ...state,
        creatingPost: true,
        userPostsLoaded: false,
        error: null,
      }
    case GET_POSTS_BY_USER:
      return {
        ...state,
        gettingUsers: true,
        userPostsLoaded: true,
        error: null,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        gettingUsers: true,
        error: null
      };
    case SUCCESS_GET_ALL_POSTS:
      return {
        ...state,
        posts: action.payload,
        gettingPosts: false,
        error: null
      };
    case SUCCESS_CREATE_NEW_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        creatingPost: false,
        error: null,
      }
    case SUCCESS_GET_ALL_USERS:
      return {
        ...state,
        userList: action.payload,
        gettingUsers: false,
        error: null
      };
    case SUCCESS_GET_POSTS_BY_USER:
      return {
        ...state,
        posts: action.payload,
        gettingUsers: false,
        error: null
      };
    case FAILURE:
      return {
        ...state,
        gettingPosts: false,
        gettingUsers: false,
        creatingPost: false,
        error: action.payload
      };
    default:
      return state;
  }
};
