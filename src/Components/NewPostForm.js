import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewPostForm(props){
  
  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({
      name: event.target.name.value, 
      headline: event.target.headline.value, 
      body: event.target.body.value, 
      id: v4()
    });
  }
  return (
    <React.Fragment>
        <ReusableForm 
        formSubmissionHandler={handleNewPostFormSubmission}
        buttonText="POST!" />
    </React.Fragment>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;