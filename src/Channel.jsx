import React from "react";
import your from "/your.jpg";
import { Link } from "react-router-dom";
import Vidpage from "./Vidpage";

const Channel = ({videos}) => {
  
  return (
    <>
    
        <div className="cover">
          <div className="channel-cover">
            <img src={your} className="channel-cover-img" />
          </div>

          <div className="channel-logo-info">
            <img className="channel-profile" src={your} />

            <div className="channel-short-info">
              <div>
                <h3 className="channel-page-name">the boogle boy</h3>
                <p className="channel-detail">
                  @thebootlegboy 4.33M subscribers 1.2K videos <br />
                  Lofi Hip Hop & Chill Beat Mixes every week 💜
                </p>
              </div>
            </div>
            <button className="subscribe">Subscribe</button>
          </div>
        </div>

        <section className="video">

        {videos.map((vid, i) => {
    return(
        <Link to="/vidplayer"> 
<Vidpage key={i} vid={vid} />;
        
        </Link>

    ) 
})}
        </section>

    </>
  );
};

export default Channel;
