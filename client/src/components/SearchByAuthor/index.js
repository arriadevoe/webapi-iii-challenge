import React, { useState } from "react";
import { connect } from "react-redux";

import { getPostsByUser } from "../../actions/actions";

import "./SearchByAuthor.css";

const SearchByAuthor = props => {
  const [currentInputState, setInputState] = useState("");

  const handleInputChange = e => {
    setInputState(e.target.value);
  };

  const filterByAuthor = e => {
    e.preventDefault();

    if (currentInputState) {
      let upperCaseArray = [];

      for (let name of currentInputState.split(" ")) {
        upperCaseArray.push(name.charAt(0).toUpperCase() + name.slice(1));
      }

      let foundCharacterArray = props.userList.filter(user => user.name === upperCaseArray.join(' '));

      if (foundCharacterArray.length) {
        props.getPostsByUser(foundCharacterArray[0].id);
      } else {
        alert ("No character with this name exists")
      } setInputState("");

    } else {
      alert("Don't leave this blank");
    }
  };

  return (
    <form>
      <input
        type="text"
        value={currentInputState}
        onChange={handleInputChange}
        placeholder="...Search by Character Name"
      />
      <button onClick={filterByAuthor}> SEARCH </button>
    </form>
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
  { getPostsByUser }
)(SearchByAuthor);
