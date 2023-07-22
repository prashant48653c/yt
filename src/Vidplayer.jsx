import React from "react";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "./App";
import gurenge from "/gurenge.jpg";

import { fetchData } from "./fetch";
import Vidpage from "./Vidpage";
import Vidsuggestion from "./Vidsuggestion";
import { Link } from "react-router-dom";
import Comment from "./Comment";
import { HiUserCircle } from "react-icons/hi2";
import {AiOutlineLike } from "react-icons/ai"
import {AiOutlineDislike } from "react-icons/ai"
import {BsThreeDots} from 'react-icons/bs'
import {PiShareFat} from 'react-icons/pi'
import HashLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";




const Vidplayer = ({ getDataVidplayer, clickedVideoId }) => {
  const { setchannalidvalue } = useContext(AppContext);

  const [suggestedvideos, setsuggestedvideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [videoid, setvideoid] = useState(clickedVideoId);
const navigate=useNavigate()
  // state for each property of video

  const [viddetail, setviddetail] = useState([]);
  const [videotitle, setvideotitle] = useState("");
  const [channalName, setchannalName] = useState("");
  const [view, setview] = useState("");
  const [time, settime] = useState("");
  const [channalid, setchannalid] = useState("");
  const [totalcomment, settotalcomment] = useState("");

  const [comments, setcomments] = useState([]);
  const [savethevideo, setsavethevideo] = useState("");


  
  useEffect(() => {
    const newid = videoid;

    fetchData(
      `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${newid}`
    ).then((detail) => {
      if (detail.items[0]) {
        setsavethevideo(detail.items[0]);
        setviddetail(detail.items[0].snippet.localized.description);
        setvideotitle(detail.items[0].snippet.localized.title);
        setchannalName(detail.items[0].snippet.channelTitle);
        setview(detail.items[0].statistics.viewCount);
        settotalcomment(detail.items[0].statistics.commentCount);
        settime(detail.items[0].snippet.publishedAt);
        setchannalid(detail.items[0].snippet.channelId);
       
      }
    });

    fetchData(`search?relatedToVideoId=${newid}&part=id%2Csnippet`).then(
      (res) => {
        setsuggestedvideos(res.items);
      }
    );

    fetchData(
      `commentThreads?part=snippet&videoId=${newid}&maxResults=100`
    ).then((videoComment) => {
      setcomments(videoComment.items);
    });
    window.scrollTo(0, 0);

    setIsLoading(false);
  }, [videoid]);
  const[appLoader,setappLoader]=useState(false)
  const [count,setcount]=useState(1)

  const getVidDetails = (e) => {
    if(count >=1){
      e.preventDefault()
      setsavethevideo([savethevideo]);
      getDataVidplayer(savethevideo);
     const vidHis=JSON.stringify(savethevideo)
     console.log(vidHis)
      // localStorage.setItem( 'history')
  localStorage.setItem(`history${count}`,vidHis)
     setcount(count + 1)
     setappLoader(true)
    }
  
  };
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    color:"red"
  };





  return (
    <section className="whole-vidplayer">
      <article className="vidplayer">
        <section className="video-player-full">

          <div className="in">
          <div className="video-player">
            <iframe
              onLoad={getVidDetails}
              className="port-image-vidplayer"
              src={`https://www.youtube.com/embed/${videoid}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          <div className="video-information-vidplayer">
            <h3 className="video-title-vidplayer">{videotitle}</h3>

            <div className="detailing">
              
                <div className="channel-vidplayer" onClick={()=>navigate("/channal")}>
                  <HiUserCircle size={20} className="icons"></HiUserCircle>

                  <div>
                    <h3
                      className="channel-name-vidplayer"
                      onClick={() => setchannalidvalue(channalid)}
                    >
                      {channalName}
                    </h3>
                    <em>1.4M Subscribers</em>
                  </div>

                  <div className="subscribe">Subscribe</div>
                </div>
              

              <div className="interaction-vidplayer">
                <button className="btn like">
                <AiOutlineLike  color="white" size={20} />  Like
                </button>

                <button className="btn like">
                <AiOutlineDislike size={20} />  DisLike
                </button>

                <button className="btn like ">
                 
                <PiShareFat size={20} />     Share
                </button>

              <button className="btn"><BsThreeDots  size={20}/></button>

              </div>
              
            </div>

            <div className="video-detail-vidplayer">
              <p className="date">
                {view} views {time}
              </p>

              <details className="details ">
                <p className="moreinfo"> {viddetail} </p>
              </details>
            </div>
          </div>
          </div>
        

          {/* comments will start from here */}

          <div className="startcomment">{totalcomment} Comments</div>

          <section className="comment-section">
            <div className="write-comment">
              <img className="user-img current-user-img" src={gurenge} />
              <div className="comment-sent">
                <input className="add-comment" placeholder="Write a comment" />
                <button className="post-btn">Comment</button>
              </div>
            </div>
            <hr />


            <div className="other-comment">
		<img className="user-img" src={gurenge}/>
		<div className="comment">
		<p className="username">{"The Developer"} </p>

			<p>{"Hello! I am the developer.Nice to meet you! I hope you like my StreamZone Web Application.Its my first React Application.Thanks for viewing my Appliaction"}</p>
		</div>
	</div>


            {comments !== undefined &&
              comments.map((comment, i) => {
                return <Comment key={i} comment={comment} />;
              })}
          </section>
        </section>
      </article>
      <aside className="suggestion-vidplayer">
        {suggestedvideos.map((video, i) => {
          function getDataVidsuggestion(data) {
            setvideoid(data);
            console.log(videoid);
          }

          return (
            
              <Vidsuggestion key={i}
                video={video}
                getDataVidsuggestion={getDataVidsuggestion} i={i}
              />
          
          );
        })}
      </aside>
    </section>
  );
};

export default Vidplayer;
