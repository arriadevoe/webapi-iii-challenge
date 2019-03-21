import React, { Component } from "react";
import { connect } from "react-redux";

import { getAllPosts } from "../../actions/actions";

import "./Posts.css";

class Posts extends Component {
  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    if (this.props.gettingPosts || this.props.gettingUsers) {
      return <p>loading</p>
    }
    return (
      <div className="posts">
        {this.props.posts.map(post => {
          return (
            <div key={post.id} className="post">
              <p className="post-author">
                {
                  this.props.userList.filter(user => user.id === post.user_id)[0].name
                }
              </p>
              <p>{post.text}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    userList: state.userList,
    gettingPosts: state.gettingPosts,
    gettingUsers: state.gettingUsers,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getAllPosts }
)(Posts);
