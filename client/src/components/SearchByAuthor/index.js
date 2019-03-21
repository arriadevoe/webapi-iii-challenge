import React, { useState } from "react";

import "./SearchByAuthor.css"

const SearchByAuthor = props => {
  const [currentInputState, setInputState] = useState("");

  const handleInputChange = e => {
    setInputState(e.target.value);
  };

  const filterByAuthor = e => {
    e.preventDefault();
    
    // this.props.getUserPosts();
    alert(currentInputState);

    setInputState("");
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

export default SearchByAuthor;
