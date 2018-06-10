import { ADD_POST, DELETE_POST } from '../actions/postAction';

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
      }
    default:
      return state;
  }
}

const initialPostState = {};

export default post;
