import React from "react";
import "./VideoItem.css";

const VideoItem = ({ traits, onVideoSelect }) => {
  return (
    <div className="video-item item" onClick={() => onVideoSelect(traits)}>
      <img
        className="ui image"
        src={traits.snippet.thumbnails.high.url}
        alt={traits.snippet.title}
      />
      <div className="content">
        <div className="header">{traits.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
