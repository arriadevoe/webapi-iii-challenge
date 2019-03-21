import React, { useState } from "react";
import { connect } from "react-redux";

import { createNewPost, getPostsByUser } from "../../actions/actions";

import { DropdownMenu, DropdownToggle, Dropdown, Form, Label, Input, Button } from "reactstrap";
import "./CreateNewPost.css";

const CreateNewPost = props => {
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
  const [dropdownOpen, dropdownToggle] = useState(false);
  const [currentText, setInputText] = useState("");
  const [currentName, setInputName] = useState("");

  const handleNameChange = e => {
    setInputName(e.target.value);
  };

  const handleTextChange = e => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    return e => {
      e.preventDefault();

      if (currentName && currentText) {
        let upperCaseArray = [];

        for (let name of currentName.split(" ")) {
          upperCaseArray.push(name.charAt(0).toUpperCase() + name.slice(1));
        }

        let foundCharacterArray = props.userList.filter(user => user.name === upperCaseArray.join(' '));

        if (foundCharacterArray.length) {
          props.createNewPost({"user_id": foundCharacterArray[0].id , "text": currentText});
          props.getPostsByUser(foundCharacterArray[0].id);
                  
          setInputName("");
          setInputText("");
        } else {
          alert("This character name does not exist.")
        } 
      } else {
        alert("Please do not leave any blank fields.");
      }

      // const stateCopy = {...this.state};
      
      // this.props.updateSmurf(id, stateCopy)
      // props.createNewPost
  
      // this.setState(prevState => ({
      //   dropdownOpen: !prevState.dropdownOpen,
      //   name: '',
      //   age: '',
      //   height: '',
      // }));
    };
  }

  return (
    <Dropdown isOpen={dropdownOpen} toggle={() => dropdownToggle(!dropdownOpen)}>
      <DropdownToggle color="success" className="quote-dropdown" caret>
        NEW QUOTE
      </DropdownToggle>
      <DropdownMenu className='quote-menu' >
        <Form
          className="quote-form"
          onSubmit={handleSubmit()}
        >
          <Label className="quote-label">
            Character Name:
            <Input
              className="quote-input"
              type="text"
              value={currentName}
              onChange={handleNameChange}
              placeholder="...Character Name"
              name="name"
            />
          </Label>
          <Label className="quote-label">
            Quote:
            <Input
              className="quote-input"
              type="textarea"
              value={currentText}
              onChange={handleTextChange}
              placeholder="...Drop a Quote!"
              name="text"
            />
          </Label>
          <Button color="primary" className="quote-btn" type="submit">
            Submit
          </Button>
        </Form>
      </DropdownMenu>
    </Dropdown>
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
  { createNewPost, getPostsByUser }
)(CreateNewPost);
