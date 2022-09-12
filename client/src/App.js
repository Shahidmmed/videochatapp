import "./App.css";
import React from "react";
import TopNav from "./components/TopNav";
import VideoCard from "./components/VideoCard";
import SideNav from "./components/SideNav";
import Notifications from "./components/Notifications";

const App = () => {
  return (
    <div>
      <TopNav />
      <VideoCard />
      <SideNav>
        <Notifications />
      </SideNav>
    </div>
  );
};

export default App;
