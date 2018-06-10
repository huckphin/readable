import {
  ADD_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
  VOTE_DOWN_COMMENT,
  VOTE_UP_COMMENT
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
    case EDIT_COMMENT:
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
    case VOTE_DOWN_COMMENT:
      if (action.id in state) {
        const newVoteScore = state[action.id]['voteScore'] - 1;
        return {
          ...state,
          [action.id]: {
            ...state[action.id],
            voteScore: newVoteScore
          }
        };
      } else {
        return state;
      }
    case VOTE_UP_COMMENT:
      if (action.id in state) {
        const newVoteScore = state[action.id]['voteScore'] + 1;
        return {
          ...state,
          [action.id]: {
            ...state[action.id],
            voteScore: newVoteScore
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
