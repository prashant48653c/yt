import { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { fetchData } from "./fetch";
import "./App.css";
import "./index.css";
import Navbar from "./Navbar";
import Vidpage from "./Vidpage";
import Sidenav from "./Sidenav";
import Vidplayer from "./Vidplayer";
import Searchresult from "./Searchresult";
import Channel from "./Channel";
import Vidsuggestion from "./Vidsuggestion";
import Minibar from "./Minibar";
import History from "./History";

export const AppContext = createContext();

function App() {
  const [selectedCategory, setselectedCategory] = useState("lofi");
  const [videos, setvideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [clickedVideoId, setClickedVideoId] = useState("");
  const [change, setchange] = useState(true);
  const [channalidvalue, setchannalidvalue] = useState("");
  const [channalDetail, setchannalDetail] = useState([]);
const [channalVideos,setchannalVideos]=useState([])
const [opensidebar, setopensidebar] = useState(false)
const [historyvideo, sethistoryvideo] = useState([])

  useEffect(() => {
    if (change) {
      fetchData(`search?part=snippet&q=${selectedCategory}`).then((res) => {
        setvideos(res.items);
        setIsLoading(false);
        console.log("Data got succesfully");
        console.log(res.items)
        setchange(false);
      });
    }
  }, [setClickedVideoId]);

  useEffect(() => {

    if (channalidvalue) {
      console.log(channalidvalue ,'from app ')
      fetchData(`channels?part=snippet%2Cstatistics&id=${channalidvalue}`).then(
        (res) => {
          const info = res.items[0];
          setchannalDetail(info);
        }
      );
    }
  }, [channalidvalue]);

  useEffect(()=>{
    if(channalidvalue ){
      console.log(channalidvalue , 'channal video')
      fetchData(`search?channelId=${channalidvalue}&part=snippet%2Cid&order=date`).then((res)=>{
        console.log(res.items)
        setchannalVideos(res.items)
    
      })
    }
    
  },[channalidvalue])

  function getDataVidpage(data, channalID) {
    const fromVidpageId = data;
    const fromVidpageChannalId = channalID;

    setClickedVideoId(fromVidpageId);
    setchannalidvalue(fromVidpageChannalId);
  }

  function getDataResult(data) {
    const fromResult = data;

    setClickedVideoId(fromResult);
  }

  function getDataVidplayer(data){
console.log('data from vidplayer' , data)
sethistoryvideo(data)
  }

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <>
      <Router>
        <AppContext.Provider
          value={{
            setselectedCategory,
            selectedCategory,
            setvideos,
            videos,
            setchange,
            change,
            channalDetail,
            setchannalidvalue,
            setClickedVideoId,
            clickedVideoId,
            setopensidebar,
            opensidebar,
            historyvideo
          }}
        >
          <Navbar
            selectedCategory={selectedCategory}
            setselectedCategory={setselectedCategory}
          />

      
         
        {
         opensidebar? <Sidenav/> : <Minibar/>
        }


          

          <Routes>

            <Route
              path="/"
              element={
                <main className="videos">
                  {videos.map((vid, i) => (
                    <Link to="/vidplayer" key={i}>
                      {" "}
                      <Vidpage
                        getDataVidpage={getDataVidpage}
                        vid={vid}
                        videoId={vid.id.videoId}
                      />{" "}
                    </Link>
                  ))}
                </main>
              }
            />

            <Route
              path="/vidplayer"
              element={<Vidplayer getDataVidplayer={getDataVidplayer} clickedVideoId={clickedVideoId} />}
            />

            <Route
              path="/result"
              element={
                <Link to="/vidplayer">
                  <Searchresult
                    selectedCategory={selectedCategory}
                    setvideos={setvideos}
                    getDataResult={getDataResult}
                    videos={videos}
                  />
                </Link>
              }
            />

         
            <Route
              path="/channal"
              element={
                <section className="channel-page">
                  <Channel
                  channalVideos={channalVideos}
                    channalidvalue={channalidvalue}
                    channalDetail={channalDetail}
                  />
                </section>
              }
            />

            <Route path="/history" element={  <section className="results" > <History  />  </section>  } ></Route>


          </Routes>
        </AppContext.Provider>
      </Router>
    </>
  );
}

export default App;
