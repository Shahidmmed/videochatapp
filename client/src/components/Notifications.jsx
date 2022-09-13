import React, { useContext } from "react";
import { SocketContext } from "../Context";
import "./_styles.scss";
import { PhoneIncoming } from "react-feather";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div className="uk-flex uk-margin notification">
          <h3>{call.name} is calling: </h3>
          <button
            className="uk-button uk-button-primary btn uk-margin-left uk-width-1-4"
            onClick={answerCall}
          >
            <PhoneIncoming className="uk-margin-right" />
            Answer
          </button>
        </div>
      )}
    </>
  );
};

export default Notifications;
