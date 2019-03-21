import React, { Component } from "react";
import { connect } from "react-redux";

import { getAllUsers } from "../../actions/actions";

import "./UserList.css";

class UserList extends Component {
  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    return (
      <div className="user-list">
        <p>Authors:</p>
        <ul className="users">
          {this.props.userList.map(user => {
            return (
              <li key={user.id} className="user">
                {user.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userList: state.userList,
    gettingUsers: state.gettingUsers,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getAllUsers }
)(UserList);
