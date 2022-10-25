import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';
import EditPostForm from './EditPostForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      formVisibleOnPage: false,
      selectedPost: null,
      editing: false
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const { id, name, headline, body } = newPost;
    const action = {
      type: 'ADD_POST',
      id: id,
      name: name,
      headline: headline,
      body: body,
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPost: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.mainPostList[id];
    this.setState({selectedPost: selectedPost});
  }

  handleDeletingPost = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_POST',
      id: id
    }
    dispatch(action);
    this.setState({selectedPost: null});
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingPostInList = (postToEdit) => {
    const { dispatch } = this.props;
    const { id, names, headline, body } = postToEdit;
    const action = {
      type: 'ADD_POST',
      id: id,
      names: names,
      headline: headline,
      body: body,
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedPost: null
    });
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.editing ) {      
      currentlyVisibleState = <EditPostForm post = {this.state.selectedPost}
                                              onEditPost = {this.handleEditingPostInList} />
      buttonText = "Return to Post List";
    } else if (this.state.selectedPost != null) {
      currentlyVisibleState = <PostDetail post = {this.state.selectedPost} 
                                            onClickingDelete = {this.handleDeletingPost}
                                            onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Post List";
      // While our PostDetail component only takes placeholder data, we will eventually be passing the value of selectedPost as a prop.
    } else if (this.state.formVisibleOnPage) {
      // This conditional needs to be updated to "else if."
      currentlyVisibleState = <NewPostForm onNewPostCreation={this.handleAddingNewPostToList}  />;
      buttonText = "Return to Post List";
    } else {
      currentlyVisibleState = <PostList postList={this.props.mainPostList} onPostSelection={this.handleChangingSelectedPost} />;      // Because a user will actually be clicking on the post in the Post component, we will need to pass our new handleChangingSelectedPost method as a prop.
      buttonText = "Add Post";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }

}

PostControl.propTypes = {
  mainPostList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    mainPostList: state
  }
}

// Note: we are now passing mapStateToProps into the connect() function.

PostControl = connect(mapStateToProps)(PostControl);


export default PostControl;