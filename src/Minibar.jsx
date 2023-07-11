import React from 'react'
import { useNavigate } from "react-router-dom";
import { useContext,useState,useEffect } from 'react';
import { AppContext } from './App';

const Minibar = () => {
	const navigate = useNavigate()

const goToHome = (e) => {
    e.preventDefault()
	  navigate("/");
	};
  return (
    <section className="sidebar-container minibar" >
	<div className="menu-small " onClick={goToHome} >
		<ion-icon name="notifications-outline" className="icon hov-icon"></ion-icon>

		Home
	</div>

	<div className="menu-small">
		<ion-icon name="notifications-outline" className="icon hov-icon"></ion-icon>

		Shorts
	</div>

	<div className="menu-small">
		<ion-icon name="notifications-outline" className="icon hov-icon"></ion-icon>

		Subscription
	</div>

	<div className="menu-small">
		<ion-icon name="notifications-outline" className="icon hov-icon"></ion-icon>

		Library
	</div>

	<div className="menu-small">
		<ion-icon name="notifications-outline" className="icon hov-icon"></ion-icon>
		
		Downloads
	</div>

</section>
  )
}

export default Minibar