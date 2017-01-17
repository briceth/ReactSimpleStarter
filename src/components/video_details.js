import React from 'react';

const VideoDetails = (props) => {
  const videoId = video.id.videoId;
  // interpollation because there are a lot of videoId
  const url = `https://www.youtube.com/embed/${videoId}`;

  console.log(props)
  return (
    <div className='video-details col-md-8'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='embed-responsive-item' src={url}></iframe>
      </div>
      <div className='details'>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetails;
