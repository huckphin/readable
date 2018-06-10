import {
  ADD_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT
} from '../actions/commentAction';

function comment(state = initialCommentState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      delete action['type'];
      return {
        ...state,
        [action.id]: action
      };
    case DELETE_COMMENT:
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
    default:
      return state;
  }
}

const initialCommentState = {};

export default comment;
