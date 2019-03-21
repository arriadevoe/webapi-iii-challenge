import React, { useState } from "react";
import { connect } from "react-redux";

import { createNewPost } from "../../actions/actions";

import "./CreateNewPost.css";

const CreateNewPost = props => {
  // const [currentInputState, setInputState] = useState("");

  // const handleInputChange = e => {
  //   setInputState(e.target.value);
  // };

  // const filterByAuthor = e => {
  //   e.preventDefault();

  //   if (currentInputState) {
  //     let upperCaseArray = [];

  //     for (let name of currentInputState.split(" ")) {
  //       upperCaseArray.push(name.charAt(0).toUpperCase() + name.slice(1));
  //     }

  //     let foundCharacterArray = props.userList.filter(user => user.name === upperCaseArray.join(' '));

  //     if (foundCharacterArray.length) {
  //       props.getPostsByUser(foundCharacterArray[0].id);
  //     } else {
  //       alert ("No character with this name exists.")
  //     } setInputState("");

  //   } else {
  //     alert("Please enter a character name.");
  //   }
  // };
  
  // const viewAll = e => {
  //   e.preventDefault();

  //   props.getAllPosts();
  // };

  return (
    <div>add new posts</div>
  );
};

const mapStateToProps = state => {
  return {
    userList: state.userList,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { createNewPost }
)(CreateNewPost);
