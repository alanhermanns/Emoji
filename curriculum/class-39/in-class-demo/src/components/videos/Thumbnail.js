import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteVideo } from '../../actions/videoActions';

const Thumbnail = ({ thumbnailUrl, videoId }) => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(deleteVideo(videoId));

  return (
    <>
      <img src={thumbnailUrl} />
      <button onClick={handleClick}>Trash</button>
    </>
  );
};

Thumbnail.propTypes = {
  thumbnailUrl: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired
};

export default Thumbnail;
