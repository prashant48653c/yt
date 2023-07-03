import React from 'react'
import viteLogo from '/vite.svg'
import { useContext } from 'react'
import { AppContext } from './App'
import { fetchData } from './fetch'
import { Link } from 'react-router-dom'
import Vidplayer from './Vidplayer'
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import {AiOutlineSearch} from "react-icons/ai"

import {AiTwotoneAudio} from "react-icons/ai"




const Navbar = ({selectedCategory,setselectedCategory}) => {

	const {setopensidebar}=useContext(AppContext)
	const {opensidebar}=useContext(AppContext)

function goToHome(){
	setselectedCategory('lofi')
}
const sidenavBtnClick=()=>{
if(opensidebar){
	setopensidebar(false)
	console.log("sidenav close")

}else{
	setopensidebar(true)
	console.log('sidebar open')
}
}

	
  return (
   <nav className='nav'>
    <div className="icon-nav">
		
<AiOutlineMenu size={32} className='icons open-sidebar' onClick={sidenavBtnClick} />
		<div className="logo-navbar" onClick={goToHome}  >

			<Link to="/">
			<AiFillYoutube size={32} className='icon ' />
			<h1 style={{display:'inline'}}>YouTube <sup>NP</sup> </h1>
			</Link>
			
		</div>
	</div>

	

	<div className="search-bar-nav">
		<div className="search-icon">
		<input  className="search-video" autoComplete='off' defaultValue="" onChange={(e)=>{setselectedCategory(e.target.value)}} placeholder="Search"  name="searchbar" />
		<Link to="/result">
		
<AiOutlineSearch size={32} onClick={()=>{fetchData}} className="icon icon-search"  />

		</Link>
		
		</div>
		<AiTwotoneAudio name="mic-outline" size={32} className="icon  mic-icon"></AiTwotoneAudio>


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