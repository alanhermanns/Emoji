import { addVideo, ADD_VIDEO, deleteVideo, DELETE_VIDEO } from './videoActions';

describe('video actions', () => {
  it('creates an add video action', () => {
    const action = addVideo('1234');

    expect(action).toEqual({
      type: ADD_VIDEO,
      payload: '1234'
    });
  });

  it('creates a delete video action', () => {
    const action = deleteVideo('1234');

    expect(action).toEqual({
      type: DELETE_VIDEO,
      payload: '1234'
    });
  });
});
