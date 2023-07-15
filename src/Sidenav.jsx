import React, { useContext } from "react";
import { AppContext } from "./App";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logout from "./signup/Logout";

const Sidenav = () => {
  const navigate = useNavigate()
  const { clickedVideoId,setselectedCategory,setchange, setClickedVideoId } = useContext(AppContext);
  const goToHome = (e) => {
    e.preventDefault()
	  navigate("/");
	};
  const goToChannal=e=>{
    e.preventDefault()
    setchange(true)
    setselectedCategory(e.target.innerHTML)
    navigate("/result")

  }
 

  return (
    <aside className="sidebar">
      <section className="sidebar-container  ">
        <div className="sidebar-menus">
          <div className="sidebar-menu" onClick={goToHome}>
            <ion-icon name="home-outline" className="icon"></ion-icon>
            <p className="menu_text">Home</p>
          </div>

          <div className="sidebar-menu">
            <ion-icon name="barbell-outline" className="icon"></ion-icon>
            <a target="_blank" href="https://buy.stripe.com/test_6oE3egfYSeLWaZy4gg" className="menu_text">Premium</a>
          </div>

          <div className="sidebar-menu">
            <ion-icon name="play-outline" className="icon"></ion-icon>
            <p className="menu_text">Subscriptions</p>
          </div>

          <hr />

          <div className="sidebar-menu">
            <ion-icon name="library-outline" className="icon"></ion-icon>
            <p className="menu_text">library</p>
          </div>

          <Link to="/history" className="sidebar-menu">
            <ion-icon name="albums-outline" className="icon"></ion-icon>
            <p className="menu_text">History</p>
          </Link>

          <div className="sidebar-menu">
            <ion-icon name="bag-outline" className="icon"></ion-icon>
            <p className="menu_text">Your Videos</p>
          </div>

          <div className="sidebar-menu">
            <ion-icon name="cloud-done-outline" className="icon"></ion-icon>
            <p className="menu_text">Watch Later</p>
          </div>

          <div className="sidebar-menu">
            <ion-icon name="briefcase-outline" className="icon"></ion-icon>
            <p className="menu_text">Liked Videos</p>
          </div>

          <div className="sidebar-menu">
            <ion-icon name="chevron-down-outline" className="icon"></ion-icon>
            <p className="menu_text">Show More</p>
          </div>
        </div>

        <hr />

        <div className="sidetext">Subscription</div>

        <div className="sidebar-menu"  >
          <ion-icon name="home-outline" className="icon"></ion-icon>
          <p className="menu_text" onClick={goToChannal} >MrBeast</p>
        </div>

        <div className="sidebar-menu">
          <ion-icon name="barbell-outline" className="icon"></ion-icon>
          <p className="menu_text" onClick={goToChannal}>CodeWithHarry</p>
        </div>

        <div className="sidebar-menu">
          <ion-icon
            name="play-forward-circle-outline"
            className="icon"
          ></ion-icon>

          <p className="menu_text" onClick={goToChannal}>BnfTV</p>
        </div>

        <div className="sidebar-menu">
          <ion-icon name="home-outline" className="icon"></ion-icon>
          <p className="menu_text" onClick={goToChannal}>WWE</p>
        </div>

        <div className="sidebar-menu">
          <ion-icon name="home-outline" className="icon"></ion-icon>
          <p className="menu_text" onClick={goToChannal}>Clever programming</p>
        </div>

        <hr />

        <div className="sidetext">Explore</div>

        <div className="sidebar-menu">
          <ion-icon name="podium-outline" className="icon"></ion-icon>
          <p className="menu_text">Trending</p>
        </div>

        <div className="sidebar-menu">
          <ion-icon name="musical-notes-outline" className="icon"></ion-icon>
          <p className="menu_text">Music</p>
        </div>

        <div className="sidebar-menu">
          <ion-icon name="game-controller-outline" className="icon"></ion-icon>
          <p className="menu_text">Gaming</p>
        </div>

        <div className="sidebar-menu">
          <ion-icon name="trophy-outline" className="icon"></ion-icon>
          <p className="menu_text">Sport </p>
        </div>

        <hr />
        <div className="sidetext">More From YouTube</div>

        <div className="sidebar-menu">
          <ion-icon name="home-outline" className="icon"></ion-icon>
          <p className="menu_text">YouTube Studio </p>
        </div>

        <div className="sidebar-menu">
          <ion-icon name="home-outline" className="icon"></ion-icon>
          <p className="menu_text">YouTube Kids </p>
        </div>

        <hr />

        <div className="sidebar-menu ">
          <ion-icon name="settings-outline" className="icon"></ion-icon>
          <p className="menu_text">Settings </p>
        </div>

        <div className="sidebar-menu">
          <ion-icon name="flag-outline" className="icon"></ion-icon>
          <p className="menu_text">Report History </p>
        </div>

        <div className="sidebar-menu">
          <ion-icon name="help-circle-outline" className="icon"></ion-icon>
          <p className="menu_text">Help </p>
        </div>

        <div className="sidebar-menu">
          <ion-icon name="document-outline" className="icon"></ion-icon>
          <Logout/> 
        </div>

        <div className="final-text">
          About Press Copyright Contact usCreatorAdvertise Developers Terms
          PrivacyPolicy & Safety How YouTube works Test new features
        </div>
      </section>
    </aside>
  );
};

export default Sidenav;
