import React from "react";

const TopNav = ({ children }) => {
  return (
    <div>
      <nav className="uk-navbar-container uk-padding-small uk-navbar uk-margin">
        <div className="uk-navbar-center">
          <h3>Video Chat</h3>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default TopNav;
