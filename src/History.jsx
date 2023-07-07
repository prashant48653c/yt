import React, { useContext,useState,useEffect } from 'react'
import { AppContext } from './App'
import { Link } from "react-router-dom";
import { fetchData } from './fetch';
import gurenge from "/gurenge.jpg";
import {HiUserCircle} from "react-icons/hi2";


const History = () => {
	const {historyvideo}=useContext(AppContext)
    const [vid, setvid] = useState([])
   const [newVid, setnewVid] = useState([])
  

useEffect(()=>{
 if (historyvideo) {
 console.log(vid)
 console.log(historyvideo)
  setnewVid([...vid, historyvideo])
  console.log(newVid)
  


 }
 
},[historyvideo])


  return (
    <>
    {
     ( newVid, historyvideo.snippet ) ?
  newVid.map((vid,i)=>{
  
    return (  

      <article className="search-result" key={i} >
      <div className="video-vidplayer-suggestion result-vid">
        <img loading="lazy"
          src={gurenge}
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
            
         fgf
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