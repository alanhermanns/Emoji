export const ADD_VIDEO = 'ADD_VIDEO';
export const addVideo = videoId => ({
  type: ADD_VIDEO,
  payload: videoId
});

export const DELETE_VIDEO = 'DELETE_VIDEO';
export const deleteVideo = videoId => ({
  type: DELETE_VIDEO,
  payload: videoId
});
