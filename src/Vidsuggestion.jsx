import React from "react";
import { useContext, useState } from "react";
import { AppContext } from "./App";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { fetchData } from "./fetch";
import Vidplayer from "./Vidplayer";
import gurenge from "/gurenge.jpg";
import { HiUserCircle } from "react-icons/hi2";

const Vidsuggestion = ({ video, getDataVidsuggestion }) => {
  const { setchannalidvalue } = useContext(AppContext);

  const [suggestionId, setsuggestionId] = useState("");

  const handleOnClick = (e) => {
    const vidId = video.id.videoId;
    setsuggestionId(vidId);
    getDataVidsuggestion(vidId);
    // console.log(vidId);
  };

  const channalOnclick = (e) => {
    const channalid = video.snippet.channelId;
    setchannalidvalue(channalid);
    // console.log(channalid, "from suggestion");
  };

  return (
    <>
      <div className="video-vidplayer-suggestion" onClick={handleOnClick}>
        <img
          src={video.snippet.thumbnails.high.url}
          loading="lazy"
          alt="vidd"
          className="port-image-suggestion"
        />
        <div>
          <h4 className="vid-title-suggestion">
            {video.snippet.title.slice(0, 55) + "..."}
          </h4>
          <div className="vid-detail-suggestion">
            <Link to="/channal" onClick={channalOnclick}>
           <p className="channal-icon-name"> <HiUserCircle size={20} className="icon"></HiUserCircle>
              {video.snippet.channelTitle}  </p>   
            </Link>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Vidsuggestion;
