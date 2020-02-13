import React, { createContext, useState, useReducer, useContext } from 'react';
import reducer from '../reducers/videosReducer';
import { addVideo, deleteVideo } from '../actions/videosActions';
import { getThumbnailUrls } from '../selectors/videosSelectors';

const VideoContext = createContext();

const useOurReducer = (reducer, initialState) => {
  const [state, setState] = useState(initialState);

  const dispatch = action => {
    const newState = reducer(state, action);
    setState(newState);
  };

  return [state, dispatch];
};

// eslint-disable-next-line react/prop-types
export const VideosProvider = ({ children }) => {
  const [videos, dispatch] = useOurReducer(reducer, []);

  return (
    <VideoContext.Provider value={{ videos, dispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideos = () => {
  const { videos } = useContext(VideoContext);
  return videos;
};

export const useSelector = selectorFn => {
  const videos = useVideos();
  return selectorFn(videos);
};

export const useVideoThumbnails = ()  => {
  // const videos = useVideos();
  // return getThumbnailUrls(videos);
  return useSelector(getThumbnailUrls);
};

export const useDispatch = () => {
  const { dispatch } = useContext(VideoContext);
  return dispatch;
};

export const useAddVideo = () => {
  const dispatch = useDispatch();
  return videoId => dispatch(addVideo(videoId));
};

export const useDeleteVideo = () => {
  const dispatch = useDispatch();
  return videoId => dispatch(deleteVideo(videoId));
};
