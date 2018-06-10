import expect from 'expect';
import comment from '../comment';
import { addComment } from '../../actions/commentAction';

function stateBefore() {
  return {
    '8tu4bsun805n8un48ve89': {
      id: '8tu4bsun805n8un48ve89',
      parentId: '8xf0y6ziyjabvozdd253nd',
      timestamp: 1469479767190,
      body: 'Comments. Are. Cool.',
      author: 'thingone',
      voteScore: -5,
      deleted: false,
      parentDeleted: false
    }
  };
}

describe('commentReducer', () => {
  it('should add one comment from an empty state', () => {
    const addComment = stateBefore()['8tu4bsun805n8un48ve89'];
    const action = {
      type: 'ADD_COMMENT',
      ...addComment
    };

    const actual = comment({}, action);
    expect(actual).toEqual(stateBefore());
  });

  it('should add a second comment', () => {
    const addComment = {
      id: '894tuq4ut84ut8v4t8wun89g',
      parentId: '8xf0y6ziyjabvozdd253nd',
      timestamp: 1468166872634,
      body: 'Hi there! I am a COMMENT.',
      author: 'thingtwo',
      voteScore: 6,
      deleted: false,
      parentDeleted: false
    };
    const action = {
      type: 'ADD_COMMENT',
      ...addComment
    };

    const expected = stateBefore();
    expected[addComment['id']] = addComment;

    const actual = comment(stateBefore(), action);
    expect(actual).toEqual(expected);
  });
});

describe('should delete comments', () => {
  it('should delete a valid comment', () => {
    const action = {
      type: 'DELETE_COMMENT',
      id: '8tu4bsun805n8un48ve89'
    };

    const expected = stateBefore();
    expected['8tu4bsun805n8un48ve89']['deleted'] = true;

    const actual = comment(stateBefore(), action);
    expect(actual).toEqual(expected);
  });

  it('should not modify state when given an invalid comment id', () => {
    const action = {
      type: 'DELETE_COMMENT',
      id: 'invalid-id'
    };

    const actual = comment(stateBefore(), action);
    expect(actual).toEqual(stateBefore());
  });

  it('should return an empty state when given an empty state', () => {
    const action = {
      type: 'DELETE_COMMENT',
      id: 'invalid-id'
    };

    const actual = comment({}, action);
    expect(actual).toEqual({});
  });
});

describe('should edit comments', () => {
  it('should edit an existing comment', () => {
    const action = {
      type: 'EDIT_COMMENT',
      body: 'I can edit the comments.',
      id: '8tu4bsun805n8un48ve89'
    };

    let expected = stateBefore();
    expected['8tu4bsun805n8un48ve89']['body'] = 'I can edit the comments.';

    const actual = comment(stateBefore(), action);
    expect(actual).toEqual(expected);
  });

  it('should not modify state with an invalid id', () => {
    const action = {
      type: 'EDIT_COMMENT',
      body: 'I should not be able to edit this comment.',
      id: 'invalid-id'
    };

    const actual = comment(stateBefore(), action);
    expect(actual).toEqual(stateBefore());
  });

  it('should return an empty state when operating on an empty state', () => {
    const action = {
      type: 'EDIT_COMMENT',
      body: 'No real id - should not be saved.',
      id: 'invalid-id'
    };

    const actual = comment({}, action);
    expect(actual).toEqual({});
  });
});

describe('vote down a comment', () => {
  it('should decrement a vote score', () => {
    const action = {
      type: 'VOTE_DOWN_COMMENT',
      id: '8tu4bsun805n8un48ve89'
    };

    let expected = stateBefore();
    expected['8tu4bsun805n8un48ve89']['voteScore'] -= 1;

    const actual = comment(stateBefore(), action);
    expect(actual).toEqual(expected);
  });

  it('should not modify state when given an invalid id', () => {
    const action = {
      type: 'VOTE_DOWN_COMMENT',
      id: 'invalid-id'
    };

    const actual = comment(stateBefore(), action);
    expect(actual).toEqual(stateBefore());
  });

  it('should return empty state when given invalid id', () => {
    const action = {
      type: 'VOTE_DOWN_COMMENT',
      id: 'invalid-id'
    };

    const actual = comment({}, action);
    expect(actual).toEqual({});
  });
});

describe('vote up a comment', () => {
  it('should vote up a valid comment', () => {
    const action = {
      type: 'VOTE_UP_COMMENT',
      id: '8tu4bsun805n8un48ve89'
    };

    let expected = stateBefore();
    expected['8tu4bsun805n8un48ve89']['voteScore'] += 1;

    const actual = comment(stateBefore(), action);
    expect(actual).toEqual(expected);
  });

  it('should not modify state when given an invalid id', () => {
    const action = {
      type: 'VOTE_UP_COMMENT',
      id: 'invalid-id'
    };

    const actual = comment(stateBefore(), action);
    expect(actual).toEqual(stateBefore());
  });

  it('should not modify state when given an empty state', () => {
    const action = {
      type: 'VOTE_UP_COMMENT',
      id: 'no-such-id'
    };

    const actual = comment({}, action);
    expect(actual).toEqual({});
  });
});
