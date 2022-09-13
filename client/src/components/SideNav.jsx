import React, { useState, useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { GitHub, Copy, PhoneMissed, PhoneOutgoing } from "react-feather";
import { SocketContext } from "../Context";
import "./_styles.scss";

const SideNav = () => {
  const {
    currentUser,
    callAccepted,
    name,
    setName,
    callEnded,
    leaveCall,
    callUser,
  } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <div className="uk-margin uk-margin-bottom uk-container uk-flex uk-flex-center uk-flex-column uk-flex-middle options">
      <div className="uk-card uk-card-default uk-card-body options-card">
        <form action="" noValidate autoComplete="off">
          <div
            className="uk-child-width-1-2@m uk-grid-small uk-grid-match"
            data-uk-grid
          >
            <div className="uk-flex uk-flex-column">
              <h3 htmlFor="name">Account Info</h3>
              <input
                type="text"
                placeholder="Enter your name"
                className="uk-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <CopyToClipboard
                text={currentUser}
                className="uk-margin-top uk-button form-btn uk-button-primary"
              >
                <button
                  className="uk-button form-btn uk-button-primary"
                  type="button"
                >
                  <Copy className="uk-margin-right" />
                  Copy Your ID
                </button>
              </CopyToClipboard>
            </div>
            <div className="uk-flex uk-flex-column">
              <h3 htmlFor="idToCall">Make a call</h3>
              <input
                type="text"
                className="uk-input"
                placeholder="Enter ID to call"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
                required
              />

              {callAccepted && !callEnded ? (
                <button
                  className="uk-button uk-button-secondary form-btn uk-margin-top"
                  type="button"
                  onClick={leaveCall}
                >
                  <PhoneMissed className="uk-margin-right" /> Hang Up
                </button>
              ) : (
                <button
                  className="uk-button uk-button-secondary form-btn uk-margin-top"
                  type="button"
                  onClick={() => callUser(idToCall)}
                >
                  <PhoneOutgoing className="uk-margin-right" /> Call
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SideNav;
