import "./App.css";
import React from "react";
import TopNav from "./components/TopNav";
import VideoCard from "./components/VideoCard";
import SideNav from "./components/SideNav";
import Notifications from "./components/Notifications";

const App = () => {
  return (
    <div className="app" data-uk-height-viewport="expand: true">
      <TopNav>
        <Notifications />
      </TopNav>
      <VideoCard />
      <SideNav />
    </div>
  );
};

export default App;
