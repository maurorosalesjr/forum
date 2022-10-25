import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";



function PostList(props){
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.postList).map((post) =>
        <Post
          whenPostClicked = { props.onPostSelection }
          name={post.name}
          headline={post.headline}
          body={post.body}
          id={post.id}
          key={post.id}/>
      )}
    </React.Fragment>
  );
}


PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func
};

export default PostList;