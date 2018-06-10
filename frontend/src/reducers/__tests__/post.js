import expect from 'expect';
import post from '../post';

function stateBefore() {
  return {
    '6ni6ok3ym7mf1p33lnez': {
      id: '6ni6ok3ym7mf1p33lnez',
      timestamp: 1468479767190,
      title: 'Learn Redux in 10 minutes!',
      body: 'Just kidding. It takes more than 10 minutes to learn technology.',
      author: 'thingone',
      category: 'redux',
      voteScore: -5,
      deleted: false,
      commentCount: 0
    }
  };
}

describe('should add posts', () => {
  it('should create a post from an empty state', () => {
    const addPost = stateBefore()[Object.keys(stateBefore())[0]];
    const action = {
      type: 'ADD_POST',
      ...addPost
    };

    const actual = post({}, action);
    expect(actual).toEqual(stateBefore());
  });

  it('should create a second post', () => {
    const addPost = {
      id: '8xf0y6ziyjabvozdd253nd',
      timestamp: 1467166872634,
      title: 'Udacity is the best place to learn React',
      body: 'Everyone says so after all.',
      author: 'thingtwo',
      category: 'react',
      voteScore: 6,
      deleted: false,
      commentCount: 2
    };
    const action = {
      ...addPost,
      type: 'ADD_POST'
    };

    let expected = stateBefore();
    expected[addPost['id']] = addPost;

    const actual = post(stateBefore(), action);
    expect(actual).toEqual(expected);
  });
});

describe('should delete posts', () => {
  it('should delete a valid post', () => {
    const action = {
      type: 'DELETE_POST',
      id: Object.keys(stateBefore())[0]
    };

    let expected = stateBefore();
    expected[Object.keys(stateBefore())[0]]['deleted'] = true;

    const actual = post(stateBefore(), action);
    expect(actual).toEqual(expected);
  });

  it('should not modify state when given an invalid id', () => {
    const action = {
      type: 'DELETE_POST',
      id: 'invalid-id'
    };

    const actual = post(stateBefore(), action);
    expect(actual).toEqual(stateBefore());
  });

  it('should not modify state when given an empty state', () => {
    const action = {
      type: 'DELETE_POST',
      id: 'no-such-id'
    };

    const actual = post({}, action);
    expect(actual).toEqual({});
  });
});
