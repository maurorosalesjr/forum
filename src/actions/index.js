import * as c from './../actions/ActionTypes';


export const deletePost = id => ({
  type: c.DELETE_POST,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addPost = (post) => {
  const { name, headline, body, id } = post;
  return {
    type: c.ADD_POST,
    name: name,
    headline: headline,
    body: body,
    id: id
  }
}