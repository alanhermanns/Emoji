import React from 'react';
import Thumbnail from './Thumbnail';
import { useSelector } from 'react-redux';
import { getThumbnails } from '../../selectors/videosSelectors';

const Thumbnails = () => {
  // [{ videoId: 'w8bm5Sue_0Y', thumbnailUrl: 'https://img.youtube.com/vi/w8bm5Sue_0Y/default.jpg'}]
  const thumbnails = useSelector(getThumbnails);

  const thumbnailElements = thumbnails.map(({ videoId, thumbnailUrl }) => (
    <li key={videoId}>
      <Thumbnail videoId={videoId} thumbnailUrl={thumbnailUrl} />
    </li>
  ));

  return (
    <ul>
      {thumbnailElements}
    </ul>
  );
};

export default Thumbnails;
