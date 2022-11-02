import * as c from './../actions/ActionTypes';

const reducer = (state = {}, action) => {
  const { name, headline, body, id } = action;
  switch (action.type) {
  case c.ADD_POST:
    return Object.assign({}, state, {
      [id]: {
        name: name,
        headline: headline,
        body: body,
        id: id
      }
    });
  case c.DELETE_POST:
    let newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};

export default reducer;