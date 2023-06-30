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

export const AppContext = createContext();

function App() {
  const [selectedCategory, setselectedCategory] = useState("lofi");
  const [videos, setvideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [clickedVideoId, setClickedVideoId] = useState("");
const [change, setchange] = useState(true)
  useEffect(() => {
    
    if(change){
      fetchData(`search?part=snippet&q=${selectedCategory}`).then((res) => {
        setvideos(res.items);
        setIsLoading(false);
        console.log("Data got succesfully");
        setchange(false)
      });
    }

  
   
  }, [setClickedVideoId]);

  

  function getDataVidpage(data) {
    const fromVidpageId = data;
    console.log(fromVidpageId);
    setClickedVideoId(fromVidpageId);
  }

  function getDataResult(data){
    const fromResult=data
    console.log(fromResult)

    setClickedVideoId(fromResult)
  }


  if (isLoading) {
    return <div>loading</div>;
  }
  
  return (
    <>
      <Router>
        <AppContext.Provider
          value={{ setselectedCategory, selectedCategory,setvideos, videos,setchange,change }}
        >
          
          <Navbar
            selectedCategory={selectedCategory}
            setselectedCategory={setselectedCategory}
          />


         

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
              element={<Vidplayer clickedVideoId={clickedVideoId} />}
            />

            <Route
              path="/result"
              element={
             <Link to="/vidplayer" >
             <Searchresult
                  selectedCategory={selectedCategory} setvideos={setvideos} getDataResult={getDataResult} 
                  videos={videos}    />
             </Link>    
             
              }
            />

            <Route
              path="/channal"
              element={
                <section className="channel-page">
                  <Channel videos={videos} />
                </section>
              }
            />
          </Routes>
        </AppContext.Provider>
      </Router>
    </>
  );
}

export default App;
