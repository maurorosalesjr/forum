import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenPostClicked(props.id)}>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
      </div>
    </React.Fragment>
  );
}

Post.propTypes = {
  name: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  body: PropTypes.string,
  id: PropTypes.string, 
  whenPostClicked: PropTypes.func 
};

export default Post;