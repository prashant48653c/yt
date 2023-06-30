import React from 'react'
import viteLogo from '/vite.svg'
import { useContext } from 'react'
import { AppContext } from './App'
import { fetchData } from './fetch'
import { Link } from 'react-router-dom'
import Vidplayer from './Vidplayer'



const Navbar = ({selectedCategory,setselectedCategory}) => {

function goToHome(){
	setselectedCategory('lofi')
}
	

	
  return (
   <nav className='nav'>
    <div className="icon-nav">
		
		<ion-icon name="menu-outline" className="icons"></ion-icon>
		<div className="logo-navbar" onClick={goToHome}  >

			<Link to="/">
			<ion-icon name="logo-youtube"  className="icons"></ion-icon>
			<h1 style={{display:'inline'}}>YouTube <sup>NP</sup> </h1>
			</Link>
			
		</div>
	</div>

	

	<div className="search-bar-nav">
		<div className="search-icon">
		<input  className="search-video" defaultValue="" onChange={(e)=>{setselectedCategory(e.target.value)}} placeholder="Search"  name="searchbar" />
		<Link to="/result">
		<ion-icon name="search-outline" onClick={()=>{fetchData}} className="icon icon-search"></ion-icon>
		</Link>
		
		</div>
		<ion-icon name="mic-outline" className="icon  mic-icon"></ion-icon>


	</div>


	<div className="setting-nav">
		<ion-icon name="videocam-outline" className="icon hov-icon" ></ion-icon>
		<ion-icon name="notifications-outline" className="icon hov-icon"></ion-icon>
		<ion-icon name="person-circle-outline" className="icon hov-icon"></ion-icon>

	</div>
   </nav>
  )
}

export default Navbar