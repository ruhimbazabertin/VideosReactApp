import React from 'react';
import VideoItem from './VideoItem';
const videoList = ({videos, onVideoSelect}) => {
  const renderedList = videos.map(video => {
      return <VideoItem video={video} onVideoSelect={onVideoSelect}/>;
  });
    return <div className="ui relaxed divided list">{renderedList}</div>;
}

export default videoList;