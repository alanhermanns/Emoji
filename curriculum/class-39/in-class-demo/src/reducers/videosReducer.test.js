import { addVideo, deleteVideo } from '../actions/videoActions';
import reducer from './videosReducer';

describe('video reducer', () => {
  it('handles the add video action', () => {
    const action = addVideo('1234');
    const initialState = ['3456', '7890'];

    const newState = reducer(initialState, action);

    expect(newState).toEqual(['1234', '3456', '7890']);
  });

  it('handle the delete video action', () => {
    const action = deleteVideo('1234');
    const initialState = ['1234', '3456', '7890'];

    const newState = reducer(initialState, action);

    expect(newState).toEqual(['3456', '7890']);
  });
});
