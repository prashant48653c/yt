import React from "react";
import { useContext, useState } from "react";
import { AppContext } from "./App";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { fetchData } from "./fetch";
import Vidplayer from "./Vidplayer";
import gurenge from "/gurenge.jpg";

const Vidsuggestion = ({ video, getDataVidsuggestion }) => {

 const {setchannalidvalue}=useContext(AppContext)

  const [suggestionId, setsuggestionId] = useState("");

  const handleOnClick = (e) => {
    const vidId = video.id.videoId;
    setsuggestionId(vidId);
    getDataVidsuggestion(vidId);
    console.log(vidId);
  };

  const channalOnclick=(e)=>{
    const channalid=video.snippet.channelId;
    setchannalidvalue(channalid)
    console.log(channalid)
  }

  return (
    <>
      <div className="video-vidplayer-suggestion" onClick={handleOnClick}>
        <img
          src={video.snippet.thumbnails.high.url}
          alt="vidd"
          className="port-image-suggestion"
        />
        <div>
          <h4 className="vid-title-suggestion">{video.snippet.title}</h4>
          <div className="vid-detail-suggestion">
            <Link to="/channal"  onClick={channalOnclick} >{video.snippet.channelTitle}</Link>
            <p className="para">38M view ' 2 years ago</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vidsuggestion;
