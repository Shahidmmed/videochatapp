import React, { useState, useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Notifications from "./Notifications";
import { SocketContext } from "../Context";
import "./_styles.scss";

const SideNav = ({ children }) => {
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
    <div className="uk-margin uk-container uk-flex uk-flex-center uk-flex-column uk-flex-middle options">
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <CopyToClipboard text={currentUser} className="uk-margin-top">
                <button
                  className="uk-button form-btn uk-button-primary"
                  type="button"
                >
                  Copy Your ID
                </button>
              </CopyToClipboard>
            </div>
            <div className="uk-flex uk-flex-column">
              <h3 htmlFor="idToCall">Make a call</h3>
              <input
                type="text"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
              />

              {callAccepted && !callEnded ? (
                <button
                  className="uk-button uk-button-secondary form-btn uk-margin-top"
                  type="button"
                  onClick={leaveCall}
                >
                  Hang Up
                </button>
              ) : (
                <button
                  className="uk-button uk-button-secondary form-btn uk-margin-top"
                  type="button"
                  onClick={() => callUser(idToCall)}
                >
                  Call
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
