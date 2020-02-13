import React from 'react';
import Thumbs from './Thumbs';
import VideoForm from './VideoForm';

// x7Qe9obIU7w
// w8bm5Sue_0Y
// Vhh_GeBPOhs
// W2ddBwMnFeE
// sP4NMoJcFd4
// RJtRcoTF0S4
const VideosPage = () => {
  return (
    <>
      {/* <VideoForm submitVideoId={videoId => addVideo(videoId)} /> */}
      <VideoForm />
      <Thumbs />
    </>
  );
};

VideosPage.propTypes = {};

export default VideosPage;
