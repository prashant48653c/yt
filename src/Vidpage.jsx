import React, { useEffect, useState } from "react";
import gurenge from "/gurenge.jpg";
import { useContext } from "react";
import { AppContext } from "./App";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { fetchData } from "./fetch";
import Vidplayer from "./Vidplayer";

const Vidpage = ({ vid, getDataVidpage, videoId }) => {
  const {setselectedCategory}=useContext(AppContext)
  const [selectedVideoId, setSelectedVideoId] = useState("");


  const handleClick = (e) => {
    console.log("clicked");
    const updatedVideoId = vid.id.videoId;
    setSelectedVideoId(updatedVideoId);
    getDataVidpage(updatedVideoId);
    console.log(updatedVideoId);
  };

  return (
    <section className="video" onClick={handleClick}>
      <img
        src={vid.snippet.thumbnails.high.url}
        alt="thumbnail"
        className="port-image suggestion-img"
      />
      <div className="vid-info">
        <ion-icon name="person-circle-outline" className="icons"></ion-icon>
        <div>
          <h4 className="vid-title">
            {vid.snippet.title.length < 55
              ? vid.snippet.title
              : vid.snippet.title.slice(0, 55) + "..."}
          </h4>

          <div className="vid-detail">
            <Link to="/channal">{vid.snippet.channelTitle}</Link>
            <p className="para">38M view ' 2 years ago</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vidpage;
