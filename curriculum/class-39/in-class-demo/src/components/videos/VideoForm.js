import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addVideo } from '../../actions/videoActions';

const VideoForm = () => {
  const [videoId, setVideoId] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addVideo(videoId));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={videoId} onChange={({ target }) => setVideoId(target.value)} />
      <button>Submit</button>
    </form>
  );
};

export default VideoForm;
