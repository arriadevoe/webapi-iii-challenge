import React, { Component } from "react";
import { connect } from "react-redux";

import { getAllPosts, getAllUsers } from "../../actions/actions";

import "./Posts.css";
import Loader from "react-loader-spinner";

class Posts extends Component {
  componentDidMount() {
    this.props.getAllPosts();
    this.props.getAllUsers();
  }

  render() {
    if (this.props.gettingPosts || this.props.gettingUsers) {
      return <Loader type="Puff" color="white" height={80} width={80} />;
    } else if (this.props.userPostsLoaded) {
      return (
        <div className="posts">
          {this.props.posts.map(post => {
            return (
              <div key={post.id} className="post">
                <p className="quote">{`"${post.text}"`}</p>
                <p className="author">
                  {`-${post.postedBy}`}
                </p>
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <div className="posts">
        {this.props.posts.map(post => {
          return (
            <div key={post.id} className="post">
              <p className="quote">{`"${post.text}"`}</p>
              <p className="author">
                {`-${
                  this.props.userList.filter(
                    user => user.id === post.user_id
                  )[0].name
                }`}
              </p>
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
    userPostsLoaded: state.userPostsLoaded,
    gettingPosts: state.gettingPosts,
    gettingUsers: state.gettingUsers,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getAllPosts, getAllUsers }
)(Posts);
