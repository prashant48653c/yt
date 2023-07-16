import React, { useEffect, useState } from "react";
import gurenge from "/gurenge.jpg";
import { useContext } from "react";
import { AppContext } from "./App";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { fetchData } from "./fetch";
import Vidplayer from "./Vidplayer";
import { HiUserCircle } from "react-icons/hi2";

const Vidpage = ({ vid,i, getDataVidpage, videoId }) => {
  const { setselectedCategory } = useContext(AppContext);
  const [selectedVideoId, setSelectedVideoId] = useState("");
  const [channelId, setchannelId] = useState("");

  const getChannalIdVidpage = (e) => {};
  const handleClick = (e) => {
    const channalid = vid.snippet.channelId;
    // console.log(vid.snippet.channelId);
    setchannelId(channalid);
    // console.log("clicked");
    const updatedVideoId = vid.id.videoId;

    setSelectedVideoId(updatedVideoId);
    getDataVidpage(updatedVideoId, channalid);

    // console.log(updatedVideoId);
  };

  return (
    <section className="video" onClick={handleClick}>
      <div className="no">
        <img
          src={vid.snippet.thumbnails.high.url}
          alt="thumbnail"
          loading="lazy"
          className="port-image suggestion-img"
        />
      </div>

      <div className="vid-info">
        <HiUserCircle size={32} className="user-img" />
        <div>
          <h4 className="vid-title">
            {vid.snippet.title.length < 55
              ? vid.snippet.title
              : vid.snippet.title.slice(0, 55) + "..."}
          </h4>

          <div className="vid-detail">
            <Link to="/channal">
              <em onClick={getChannalIdVidpage}>{vid.snippet.channelTitle}</em>
            </Link>
            <p className="para">1{i}M view ' 2 years ago</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vidpage;
