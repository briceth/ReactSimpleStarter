import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return(
    <VideoListItem
      onVideoClick={props.onVideoSelect}
      key={video.etag} video={video} />
    )
  })
  // let videos = props.videos.length;
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
}

export default VideoList;
//when call the array, it appears twice
