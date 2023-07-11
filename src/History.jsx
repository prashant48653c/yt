import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "./App";
import { Link } from "react-router-dom";
import { fetchData } from "./fetch";
import gurenge from "/gurenge.jpg";
import { HiUserCircle } from "react-icons/hi2";
import nodata from "/nodata.svg";

const History = () => {
  const { historyvideo } = useContext(AppContext);
  const [objectArray, setObjectArray] = useState([]);

  // Function to add the object to the array
  const addObjectToArray = (newObject) => {
    setObjectArray(prevArray => [...prevArray, newObject]);
  };

  useEffect(() => {
    // Simulating the arrival of a new object
    const handleNewObject = () => {
      // Assuming the object `historyVideo` is received from another component
      const newObject = historyvideo;
      addObjectToArray(newObject);
    };

    // Call the handleNewObject function when the object arrives
    handleNewObject();

    // Clean up the effect
    
  }, []);
  console.log(objectArray)

  return (
    <>
      {(objectArray, historyvideo.snippet) ? (
        objectArray.map((vid, i) => {
          return (
            <article className="search-result" key={i}>
              <div className="video-vidplayer-suggestion result-vid">
                <img
                  loading="lazy"
                  src={vid.snippet.thumbnails.high.url}
                  alt=""
                  className="port-image-suggestion img-result"
                />
                <div className="result-text">
                  <h4 className="vid-title-suggestion vid-title-result">
                    New video
                  </h4>
                  <div className="vid-detail-suggestion channel-info">
                    <Link to="/channal">
                      <HiUserCircle
                        size={20}
                        className="icon channel-logo"
                      ></HiUserCircle>
                      {"hdhf"}
                    </Link>
                  </div>
                  <p className="para">38M view ' 2 years ago</p>

                  <p className="info">fgf</p>
                </div>
              </div>
            </article>
          );
        })
      ) : (
        <div className="alert-message">
          {" "}
          <img src={nodata} alt="Nodata" />{" "}
        </div>
      )}
    </>
  );
};

export default History;
