import React from "react";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "./App";
import { fetchData } from "./fetch";
import Vidpage from "./Vidpage";
import Vidsuggestion from "./Vidsuggestion";
import { Link } from "react-router-dom";

const Vidplayer = ({ clickedVideoId }) => {
  const [suggestedvideos, setsuggestedvideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [videoid, setvideoid] = useState(clickedVideoId);

  // state for each property of video

  const [viddetail, setviddetail] = useState([]);
  const [videotitle, setvideotitle] = useState('')
  const [channalName, setchannalName] = useState('')
  const [view, setview] = useState('')
  const [time, settime] = useState('')


  const [comments, setcomments] = useState([]);

  useEffect(() => {
    const newid = videoid;

    fetchData(
      `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${newid}`
    ).then((detail) => {
     
     setviddetail(detail.items[0].snippet.localized.description)
     setvideotitle(detail.items[0].snippet.localized.title)
     setchannalName(detail.items[0].snippet.channelTitle)
     setview(detail.items[0].statistics.viewCount)
     settime(detail.items[0].snippet.publishedAt)
    });

    fetchData(`search?relatedToVideoId=${newid}&part=id%2Csnippet`).then(
      (res) => {
        setsuggestedvideos(res.items);
      }
    );

   

    fetchData(`commentThreads?part=snippet&videoId=${newid}&maxResults=100`).then(
      (videoComment) => {
        console.log(videoComment)
        setcomments(videoComment.items)
        
      
        
      }
    );

   
      
      setIsLoading(false);
   
  }, [videoid]);

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <section className="whole-vidplayer">
      <article className="vidplayer">
        <section className="video-player-full">
          <div className="video-player">
            <iframe
              className="port-image-vidplayer"
              src={`https://www.youtube.com/embed/${videoid}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="video-information-vidplayer">
            <h3 className="video-title-vidplayer">{videotitle}</h3>

            <div className="detailing">

              <Link to='/channal'>
              
              <div className="channel-vidplayer">
                <ion-icon
                  name="person-circle-outline"
                  className="icons"
                ></ion-icon>


                <div>

                  <h3 className="channel-name-vidplayer">{channalName}</h3>
                  <em>1.4M Subscribers</em>
                </div>

                <div className="subscribe">Subscribe</div>
              </div>
              </Link>
             

              <div className="interaction-vidplayer">
                <div className="like-dislike">
                  <span className="material-symbols-outlined">thumb_up</span>
                  <span>Like</span>
                  <span className="material-symbols-outlined">thumb_down</span>
                </div>

                <div className="like-dislike ">
                  <ion-icon name="send-outline" className="icon"></ion-icon>
                  Share
                </div>
              </div>
              <ion-icon
                name="ellipsis-horizontal-outline"
                className="icon hov-icon"
              ></ion-icon>
            </div>

            <div className="video-detail-vidplayer">
              <p className="date">{view} views {time}</p>
             
           
              <details className="details "  >
                <p className="moreinfo" >   {viddetail}   </p> 
              </details>
            </div>
          </div>
        </section>
      </article>
      <aside className="suggestion-vidplayer">
        {suggestedvideos.map((video, i) => {
          function getDataVidsuggestion(data) {
            setvideoid(data);
            console.log(videoid);
          }

          return (
            <Link to="/vidplayer" key={i}>
              <Vidsuggestion
                video={video}
                getDataVidsuggestion={getDataVidsuggestion}
              />
            </Link>
          );
        })}
      </aside>
    </section>
  );
};

export default Vidplayer;
