import React, { useEffect , useState } from "react";
import { useContext } from "react";
import { AppContext } from "./App";
import gurenge from "/gurenge.jpg";
import { fetchData } from "./fetch";

const Searchresult = ({ selectedCategory,videos,setvideos,getDataResult }) => {

  const [vidid, setvidid] = useState('')
	const {setchange} = useContext(AppContext)
	const {change} = useContext(AppContext)



  useEffect(() => {

  fetchData(`search?part=snippet&q=${selectedCategory}`).then((res) => {
    setvideos(res.items);
    
    console.log("Data got succesfully");
    
  });

  
  }, [selectedCategory]);

 

  return (
    <section className="results" >
      <div className="filter-div">
        <button className="btn-filter">
        
          <ion-icon name="filter-outline" className="icon"></ion-icon> Filter
        </button>
      </div>
      <hr />


{
	videos.map((vid,i)=>{

    const handleOnClick = (e) => {
    
      const vidId = vid.id.videoId;
    setvidid(vidId)  
      getDataResult(vidId);
      console.log(vidId);
    };

    return(

      <article className="search-result" key={i}  onClick={handleOnClick} >
      <div className="video-vidplayer-suggestion result-vid">
        <img
          src={vid.snippet.thumbnails.high.url}
          alt=""
          className="port-image-suggestion img-result"
        />
        <div className="result-text">
          <h4 className="vid-title-suggestion vid-title-result">
          {vid.snippet.title}
          </h4>
          <div className="vid-detail-suggestion channel-info">
            <ion-icon
              name="person-circle-outline"
              className="icon channel-logo"
            ></ion-icon>
            <a href="#">{vid.snippet.channelTitle}</a>
          </div>
          <p className="para">38M view ' 2 years ago</p>

          <p className="info">
            
            Ionicons is packaged by default, so no installation is necessary.
            Want to use Ionicons without Ionic
          </p>
        </div>
      </div>
    </article>
    )
	
	})
}
	  

     
    </section>
  );
};

export default Searchresult;
