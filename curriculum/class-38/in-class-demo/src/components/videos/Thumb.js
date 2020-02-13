import React from 'react';
import PropTypes from 'prop-types';
import { useDeleteVideo } from '../../hooks/videos';

const Thumb = ({ videoId, thumbnailUrl }) => {
  const deleteVideo = useDeleteVideo();

  return (
    <>
      <img src={thumbnailUrl} />
      <button onClick={event => {
        event.preventDefault();
        deleteVideo(videoId);
      }}>🗑️</button>
    </>
  );
};

Thumb.propTypes = {
  videoId: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired
};

export default Thumb;
