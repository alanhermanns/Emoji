import React, { useState } from 'react';
import { useAddVideo } from '../../hooks/videos';

const VideoForm = () => {
  const addVideo = useAddVideo();
  const [videoId, setVideoId] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    addVideo(videoId);
    setVideoId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={videoId} onChange={({ target }) => setVideoId(target.value)} />
      <button>Submit</button>
    </form>
  );
};

export default VideoForm;
