import React from "react";
import PropTypes from "prop-types";

function PostDetail(props){
  const { post, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Post Detail</h1>
      <h3>{post.headline}</h3>
      <p><em>{post.name}</em></p>
      <p>{post.body}</p>
      <button onClick={ props.onClickingEdit }>Update Post</button> 
      <button onClick={()=> onClickingDelete(post.id) }>Close Post</button> 
      <hr/>
    </React.Fragment>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default PostDetail;