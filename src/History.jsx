

import React, { useContext,useState,useEffect } from 'react'
import { AppContext } from './App'
import { Link } from "react-router-dom";
import { fetchData } from './fetch';
import gurenge from "/gurenge.jpg";
import {HiUserCircle} from "react-icons/hi2";





const History = () => {
  
  const [vids, setvids] = useState([]);
  const [count,setcount]=useState(0)
  

 
  // const getHistory= localStorage.getItem(`history${count}`)
  //   const historyvideo=JSON.parse(getHistory)
  //  console.log(historyvideo)
  //  setvids(historyvideo)

   





  return (
    <>
    {
     (vids ) ?
  vids.map((vid,i)=>{
    console.log(vid.id)

    return (  

      <article className="search-result" key={i} >
      <div className="video-vidplayer-suggestion result-vid">
        <img loading="lazy"
          src={vid.snippet.thumbnails.high.url}
          alt=""
          className="port-image-suggestion img-result"
        />
        <div className="result-text">
          <h4 className="vid-title-suggestion vid-title-result">
      New video
          </h4>
          <div className="vid-detail-suggestion channel-info">
           
            <Link to="/channal"  >
            <HiUserCircle size={20} className="icon channel-logo" ></HiUserCircle>
              {'hdhf'}</Link>
          </div>
          <p className="para">38M view ' 2 years ago</p>

          <p className="info">
            
        hi
          </p>
        </div>
      </div>
    </article>

    )
   
        }) : <div>No history</div>
     

    }
  
     
   </>
  )
}

export default History