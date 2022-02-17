import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const ytVideos = videos.map((video) => {
    return (
      <VideoItem
        traits={video}
        onVideoSelect={onVideoSelect}
        key={video.id.videoId}
      />
    );
  });
  return <div className="ui relaxed divided list">{ytVideos}</div>;
};

export default VideoList;
