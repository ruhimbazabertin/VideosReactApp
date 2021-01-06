import React from 'react';

const videoItem = ({video}) => {

    return <div>{video.snippet.title}</div>;
}

export default videoItem;