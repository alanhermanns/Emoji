import React from 'react';
import Thumb from './Thumb';
import { Link } from 'react-router-dom';
import { useVideoThumbnails } from '../../hooks/videos';

const Thumbs = () => {
  const thumbnailUrls = useVideoThumbnails();
  
  const thumbnailElements = thumbnailUrls.map(({ thumbnailUrl, videoId }) => (
    <li key={videoId}>
      <Link to={`/${videoId}`}>
        {/* <Thumb thumbnailUrl={thumbnailUrl} onDeleteVideo={onDeleteVideo.bind(null, videoId)} /> */}
        <Thumb videoId={videoId} thumbnailUrl={thumbnailUrl} />
      </Link>
    </li>
  ));

  return (
    <ul>
      {thumbnailElements}
    </ul>
  );
};

export default Thumbs;
