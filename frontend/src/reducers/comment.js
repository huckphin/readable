import { ADD_COMMENT } from '../actions/commentAction';

function comment(state = initialCommentState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      delete action['type'];
      return {
        ...state,
        [action.id]: action
      };
    default:
      return state;
  }
}

const initialCommentState = {};

export default comment;
