import { ADD_COMMENT, DELETE_COMMENT } from '../actions/commentAction';

function comment(state = initialCommentState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      delete action['type'];
      return {
        ...state,
        [action.id]: action
      };
    case DELETE_COMMENT:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          deleted: true
        }
      };
    default:
      return state;
  }
}

const initialCommentState = {};

export default comment;
