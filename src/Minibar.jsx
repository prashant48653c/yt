import React from 'react'
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from 'react';
import { AppContext } from './App';
import { AiOutlineHome } from "react-icons/ai";
import { TiArrowDown } from "react-icons/ti"
import { HiOutlineLibrary } from "react-icons/hi"
import { MdOutlineSubscriptions } from "react-icons/md"
import { FaHistory } from "react-icons/fa"
import { AiOutlineSetting } from "react-icons/ai"

const Minibar = () => {
	const { setopensetting, opensetting } = useContext(AppContext)
	const navigate = useNavigate()

	const goToHome = (e) => {
		e.preventDefault()
		navigate("/");
	};

	const openSetting = e => {
		e.preventDefault()
		if (opensetting) {
			setopensetting(false)

		} else {
			setopensetting(true)
		}
	}
	return (
		<section className="sidebar-container minibar" >
			<div className="menu-small " onClick={goToHome} >
				<AiOutlineHome size={40} className="icon hov-icon"></AiOutlineHome>

				Home
			</div>

			<div className="menu-small">
				<FaHistory size={40} className="icon hov-icon"></FaHistory>

				Shorts
			</div>

			<div className="menu-small">
				<MdOutlineSubscriptions size={40} className="icon hov-icon"></MdOutlineSubscriptions>

				Subscription
			</div>

			<div className="menu-small">
				<HiOutlineLibrary size={40} className="icon hov-icon"></HiOutlineLibrary>

				Library
			</div>

			<div className="menu-small">
				<AiOutlineSetting size={40} onClick={openSetting} className="icon hov-icon"></AiOutlineSetting>

				Settings
			</div>

		</section>
	)
}

export default Minibar