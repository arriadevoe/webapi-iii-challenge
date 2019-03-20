import React, { Component } from "react";
import { connect } from "react-redux";

import { getAllPosts } from "../../actions/actions";

import "./Posts.css";

class Posts extends Component {
  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    return (
      <div className="posts">
        {this.props.posts.map(post => {
          return (
            <div key={post.id} className="post">
              <p>{post.user_id}</p>
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
    gettingPosts: state.gettingPosts,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getAllPosts }
)(Posts);
