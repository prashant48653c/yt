import React from "react";
import viteLogo from "/vite.svg";
import { useContext } from "react";
import { AppContext } from "./App";
import { fetchData } from "./fetch";
import { Link,useNavigate } from "react-router-dom";
import Vidplayer from "./Vidplayer";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import {AiOutlineVideoCameraAdd} from "react-icons/ai"
import { AiTwotoneAudio } from "react-icons/ai";
import {   AiOutlineBell} from "react-icons/ai";

const Navbar = ({ selectedCategory, setselectedCategory }) => {


const navigate=useNavigate();

  const { setopensidebar,opensetting,userData } = useContext(AppContext);
  const { opensidebar ,setopensetting,setchange} = useContext(AppContext);








  function goToHome(e) {
    e.preventDefault()
    setchange(true)
    setselectedCategory("lofi");
    navigate("/")
  }
  const sidenavBtnClick = () => {

    if (opensidebar ) {
      setopensidebar(false);
		setopensetting(false)

     
    }
    else   {
      setopensidebar(true);
     
    }
  };

  

  return (
    <nav className="nav">
      <div className="icon-nav">
        <AiOutlineMenu
          size={28}
          className="icons open-sidebar"
          onClick={sidenavBtnClick}
        />
        <div className="logo-navbar" onClick={goToHome}>
          
            <AiFillYoutube size={32} className="icon " />
            <h1 style={{ display: "inline" }}>
              StreamZone <sup>NP</sup>{" "}
            </h1>
        
        </div>
      </div>

      <div className="search-bar-nav">
        <div className="search-icon">
          <input
            className="search-video"
            autoComplete="off"
            defaultValue=""
            onChange={(e) => {
              setselectedCategory(e.target.value);
            }}
            placeholder="Search"
            name="searchbar"
          />
          <Link to="/result">
            <AiOutlineSearch
              size={25}
              onClick={() => {
                fetchData;
              }}
              className="icon icon-search"
            />
          </Link>
        </div>
        <AiTwotoneAudio
          name="mic-outline"
          size={35}
          className="icon  mic-icon del-icon"
        ></AiTwotoneAudio>
      </div>

      <div className="setting-nav">
        <AiOutlineVideoCameraAdd  className="icon del-icon hov-icon" size={40} />
        <AiOutlineBell
       size={40}
          className="icon hov-icon del-icon"
        ></AiOutlineBell>
        
        <img src={userData.user.photoURL}   className="profile-nav" alt="profile-img" />
      </div>
    </nav>
  );
};

export default Navbar;
