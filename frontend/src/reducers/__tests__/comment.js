import expect from 'expect';
import comment from '../comment';

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
    const action = {
      type: 'ADD_COMMENT',
      id: '8tu4bsun805n8un48ve89',
      parentId: '8xf0y6ziyjabvozdd253nd',
      timestamp: 1469479767190,
      body: 'Comments. Are. Cool.',
      author: 'thingone',
      voteScore: -5,
      deleted: false,
      parentDeleted: false
    };

    const expected = {
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

    const actual = comment({}, action);
    expect(actual).toEqual(expected);
  });

  it('should add a second comment', () => {
    const action = {
      type: 'ADD_COMMENT',
      id: '894tuq4ut84ut8v4t8wun89g',
      parentId: '8xf0y6ziyjabvozdd253nd',
      timestamp: 1468166872634,
      body: 'Hi there! I am a COMMENT.',
      author: 'thingtwo',
      voteScore: 6,
      deleted: false,
      parentDeleted: false
    };

    const expected = {
      '894tuq4ut84ut8v4t8wun89g': {
        id: '894tuq4ut84ut8v4t8wun89g',
        parentId: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1468166872634,
        body: 'Hi there! I am a COMMENT.',
        author: 'thingtwo',
        voteScore: 6,
        deleted: false,
        parentDeleted: false
      },
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

    const expected = {
      '8tu4bsun805n8un48ve89': {
        id: '8tu4bsun805n8un48ve89',
        parentId: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1469479767190,
        body: 'Comments. Are. Cool.',
        author: 'thingone',
        voteScore: -5,
        deleted: true,
        parentDeleted: false
      }
    };
    const actual = comment(stateBefore(), action);
    expect(actual).toEqual(expected);
  });

  it('should not modify state when given an invalid comment id', () => {
    const action = {
      type: 'DELETE_COMMENT',
      id: 'invalid-id'
    };

    const expected = {
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
    const actual = comment(stateBefore(), action);
    expect(actual).toEqual(expected);
  });
});

describe('should edit comments', () => {
  it('should edit an existing comment', () => {
    const action = {
      type: 'EDIT_COMMENT',
      body: 'I can edit the comments.',
      id: '8tu4bsun805n8un48ve89'
    };

    const expected = {
      '8tu4bsun805n8un48ve89': {
        id: '8tu4bsun805n8un48ve89',
        parentId: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1469479767190,
        body: 'I can edit the comments.',
        author: 'thingone',
        voteScore: -5,
        deleted: false,
        parentDeleted: false
      }
    };

    const actual = comment(stateBefore(), action);
    expect(actual).toEqual(expected);
  });

  it('should not modify state with an invalid id', () => {
    const action = {
      type: 'EDIT_COMMENT',
      body: 'I should not be able to edit this comment.',
      id: 'invalid-id'
    };

    const expected = {
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

    const actual = comment(stateBefore(), action);
    expect(actual).toEqual(expected);
  });
});
