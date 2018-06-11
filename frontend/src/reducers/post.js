import { ADD_POST, DELETE_POST, EDIT_POST } from '../actions/postAction';

function post(state = initialPostState, action) {
  switch (action.type) {
    case ADD_POST:
      delete action['type'];
      return {
        ...state,
        [action.id]: action
      };
    case DELETE_POST:
      if (action.id in state) {
        return {
          ...state,
          [action.id]: {
            ...state[action.id],
            deleted: true
          }
        };
      } else {
        return state;
      }
    case EDIT_POST:
      if (action.id in state) {
        return {
          ...state,
          [action.id]: {
            ...state[action.id],
            body: action.body
          }
        };
      } else {
        return state;
      }
    default:
      return state;
  }
}

const initialPostState = {};

export default post;
