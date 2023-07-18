import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "./App";
import gurenge from "/gurenge.jpg";
import { fetchData } from "./fetch";
import { Link } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi2";

const Searchresult = ({
  selectedCategory,
  videos,
  setvideos,
  getDataResult,
}) => {
  const { setchannalidvalue } = useContext(AppContext);

  const [vidid, setvidid] = useState("");
  const { setchange } = useContext(AppContext);
  const { change } = useContext(AppContext);

  useEffect(() => {
    fetchData(`search?part=snippet&q=${selectedCategory}`).then((res) => {
      setvideos(res.items);

      console.log("Data got succesfully");
    });
  }, [selectedCategory]);

  return (
    <section className="results">
      <div className="filter-div">
        <button className="btn-filter">
          <ion-icon name="filter-outline" className="icon"></ion-icon> Filter
        </button>
      </div>
      <hr />

      {videos.map((vid, i) => {
        const handleOnClick = (e) => {
          const vidId = vid.id.videoId;
          setvidid(vidId);
          getDataResult(vidId);
          console.log(vidId);
        };

        return (
          <article className="search-result" key={i} onClick={handleOnClick}>
            <div className="video-vidplayer-suggestion result-vid">
              <img
                loading="lazy"
                src={vid.snippet.thumbnails.high.url}
                alt=""
                className="port-image-suggestion img-result"
              />
              <div className="result-text">
                <h4 className="vid-title-suggestion vid-title-result">
                  {vid.snippet.title}
                </h4>
                <div className="vid-detail-suggestion channel-info">
                  <Link
                    to="/channal"
                    onClick={() => setchannalidvalue(vid.snippet.channelId)}
                  >
                    <p className="channal-icon-name">
                    <HiUserCircle
                      size={25}
                      className="icon channel-logo"
                    ></HiUserCircle>
                    {vid.snippet.channelTitle}
                    </p>
                   


                  </Link>
                </div>
                <p className="para">3{i}M view ' 2 month ago</p>

                <p className="info">{(vid.snippet.description.slice(0,400))}</p>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Searchresult;
