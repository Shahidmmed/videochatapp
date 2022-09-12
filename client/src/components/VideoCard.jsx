import React, { useContext } from "react";
import { SocketContext } from "../Context";
import "./_styles.scss";

const VideoCard = () => {
  const {
    name,
    callAccepted,
    callerVideo,
    recipientVideo,
    callEnded,
    stream,
    call,
  } = useContext(SocketContext);

  return (
    <div className="uk-container uk-flex uk-flex-center uk-flex-column uk-flex-middle video-cards">
      <div
        className="uk-child-width-1-2@m uk-grid-small uk-grid-match video-grid"
        data-uk-grid
      >
        {stream && (
          <div>
            <div className="uk-card uk-padding-small uk-card-default uk-card-body">
              <h3 className="uk-card-title">{name || "Name"}</h3>
              <video
                playsInline
                ref={callerVideo}
                autoPlay
                className="video-player"
              />
            </div>
          </div>
        )}
        {callAccepted && !callEnded && (
          <div>
            <div className="uk-card uk-padding-small uk-card-default uk-card-body">
              <h3 className="uk-card-title">{call.name || "Name"}</h3>
              <video
                playsInline
                ref={recipientVideo}
                autoPlay
                className="video-player"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
