import React, {useState, useContext, useEffect } from "react";
import your from "/your.jpg";
import { Link } from "react-router-dom";
import Vidpage from "./Vidpage";
import { AppContext } from "./App";
import { fetchData } from "./fetch";

const Channel = ({channalidvalue,channalDetail}) => {

const [aboutChannal, setaboutChannal] = useState([])
const [channalName, setchannalName] = useState('')
const [bannerImg, setbannerImg] = useState('')
const [profile, setprofile] = useState('')
const [statitic, setstatitic] = useState([])
const [channalVideos,setchannalVideos]=useState([])

useEffect(()=>{
 if ( channalDetail && channalDetail.snippet  && channalDetail.statistics) {
  setaboutChannal(channalDetail.snippet.localized.description)
      setchannalName(channalDetail.snippet.title);
      setbannerImg(channalDetail.brandingSettings
        .image.bannerExternalUrl)
      setprofile(channalDetail.snippet.thumbnails.high.url)
      setstatitic(channalDetail.statistics)
      
    }
},[channalDetail])




useEffect(()=>{
  if(channalidvalue){
    fetchData(`search?channelId=${channalidvalue}&part=snippet%2Cid&order=date`).then((res)=>{
      console.log(res.items)
      setchannalVideos(res.items)
  
    })
  }
  
},[channalidvalue,channalDetail])
  return (
    <>
    
        <div className="cover">
          <div className="channel-cover">
           <img src={bannerImg} className="channel-cover-img" /> 

          </div>

          <div className="channel-logo-info">
            <img className="channel-profile" src={profile} />

            <div className="channel-short-info">
              <div>
                <h3 className="channel-page-name">{channalName}</h3>
                <p className="channel-detail">
                   {statitic.subscriberCount} subscribers {statitic.videoCount} videos <br />
               {aboutChannal}
                </p>
              </div>
            </div>
            <button className="subscribe">Subscribe</button>
          </div>

        </div>
        <div className="channal-category">
        <button className="btn">Videos</button>
        <button className="btn">Playlist</button>

        </div>

        

        <main className="channal-videos">
        {

          channalVideos.map((vid,i)=>{


            return  (

              <section className="video" key={i} >
           
              <img
                src={vid.snippet.thumbnails.high.url}
                alt="thumbnail"
                className="port-image suggestion-img"
              />
              <div className="vid-info">
               
                <div>
                  <h4 className="vid-title">
                     {vid.snippet.title.length < 55
                      ? vid.snippet.title
                      : vid.snippet.title.slice(0, 55) + "..."} 
                  </h4>
        
                  <div className="vid-detail">
                    
                    <p className="para">38M view ' 2 years ago</p>
                  </div>
                </div>
              </div>
            </section>
            )
          

          })
        }
</main>
      

    </>
  );
};

export default Channel;
