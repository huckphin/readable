import { ADD_POST } from '../actions/postAction';

function post(state = initialPostState, action) {
  switch (action.type) {
    case ADD_POST:
      delete action['type'];
      return {
        ...state,
        [action.id]: action
      };
    default:
      return state;
  }
}

const initialPostState = {};

export default post;
