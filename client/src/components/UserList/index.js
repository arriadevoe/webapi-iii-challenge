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
      <ul className="users">
        {this.props.userList.map(user => {
          return (
            <li key={user.id} className="user">
              {user.name}
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    userList: state.userLists,
    gettingUsers: state.gettingUsers,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getAllUsers }
)(UserList);
