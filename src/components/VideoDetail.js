import React from "react";

const VideoDetail = ({ detailVideo }) => {
  if (!detailVideo) {
    return <div>Loading..</div>;
  }
  return (
    <div>
      <div className="ui embed">
        <iframe
          title={detailVideo.snippet.title}
          src={`https://www.youtube.com/embed/${detailVideo.id.videoId}`}
        ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{detailVideo.snippet.title}</h4>
        <p className="ui">{detailVideo.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
