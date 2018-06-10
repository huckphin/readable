export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';
export const VOTE_DOWN_POST = 'VOTE_DOWN_POST';
export const VOTE_UP_POST = 'VOTE_UP_POST';

export function addPost({ title, body, author, category }) {
  return {
    type: ADD_POST,
    title,
    body,
    author,
    category
  };
}

export function deletePost({ id }) {
  return {
    type: DELETE_POST,
    id
  };
}

export function editPost({ id, body }) {
  return {
    type: EDIT_POST,
    id,
    body
  };
}

export function voteDownPost({ id }) {
  return {
    type: VOTE_DOWN_POST,
    id
  };
}

export function voteUpPost({ id }) {
  return {
    type: VOTE_UP_POST,
    id
  };
}
