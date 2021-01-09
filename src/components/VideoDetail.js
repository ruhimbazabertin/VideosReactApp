import React from 'react';

const VideoDetail = ({ video }) =>{
    if(!video){
        return <div>Loading</div>;
    }

    const videoSrc = ` https://www.youtube.com/embed/${video.id.videoId} `;

    return (
        <div>
        {/* Create a video player */}
        <div className="ui embed">
            <iframe title="video player" src="{videoSrc}"/>
            </div>
        {/* End of a video player */}
        <div className="ui segment">
        <div className="header">{video.snippet.title}</div>
        <p>{video.snippet.description}</p>
        </div>
        </div>
    )
}


export default VideoDetail;