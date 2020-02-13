export const ADD_VIDEO = 'ADD_VIDEO';
export const addVideo = id => ({
  type: ADD_VIDEO,
  payload: id
});

// Plain Old Java[Script] Object
export const DELETE_VIDEO = 'DELETE_VIDEO';
export const deleteVideo = id => ({
  type: DELETE_VIDEO,
  payload: id
});
