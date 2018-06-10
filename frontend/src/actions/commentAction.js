export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const VOTE_DOWN_COMMENT = 'VOTE_DOWN_COMMENT';
export const VOTE_UP_COMMENT = 'VOTE_UP_COMMENT';

export function addComment({
  id,
  parentId,
  timestamp,
  body,
  author,
  voteScore,
  deleted,
  parentDeleted
}) {
  return {
    type: ADD_COMMENT,
    id,
    parentId,
    timestamp,
    body,
    author,
    voteScore,
    deleted,
    parentDeleted
  };
}

export function deleteComment({ id }) {
  return {
    type: DELETE_COMMENT,
    id
  };
}

export function editComment({ id, body }) {
  return {
    type: EDIT_COMMENT,
    id,
    body
  };
}

export function voteDownComment({ id }) {
  return {
    type: VOTE_DOWN_COMMENT,
    id
  };
}

export function voteUpComment({ id }) {
  return {
    type: VOTE_UP_COMMENT,
    id
  };
}
