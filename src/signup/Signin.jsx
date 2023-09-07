import React, { useEffect, useState } from "react";
import { auth, Provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import App from "../App";
import { useNavigate } from "react-router-dom";

const Signin = ({ setuserData }) => {

	const [value, setvalue] = useState("");
	const [email, setemail] = useState('')
	const [pass, setpass] = useState('')
	// const navigate = useNavigate()
	const handleEmailClick = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, email, pass).then((data) => {
			// console.log(data)
			const newdata = true
			navigate("/")
			localStorage.setItem("data", newdata)
			window.location.reload()
		})

	}

	const handleGoogleClick = (e) => {
		e.preventDefault();
		signInWithPopup(auth, Provider).then((data) => {
			const newdata = JSON.stringify(data)

			localStorage.setItem("data", newdata)
			//   console.log(data);
			// navigate("/")
			window.location.reload()


		});
	};

	const continueGuest = e => {
		e.preventDefault()
		localStorage.setItem("data", true)
		window.location.reload()


	}



	return (
		<>
			<section className="signup-container">


				<div className="signup-box">

					<div className="signup-area">
						<form action="" className="form">
							<div className="create-account">
								<span className="highlight">Create</span> an Account
							</div>

							<input type="text" placeholder="Enter your username" className=" my-input username-signup" name="username" />
							<input type="email " placeholder="Enter your email" onChange={(e) => setemail(e.target.value)} value={email} className=" my-input username-signup" name="email" />
							<input type="password" placeholder="Enter your password" onChange={(e) => setpass(e.target.value)} value={pass} className=" my-input username-signup" name="password" />
							<div className="agreement">
								<input type="checkbox" name="check" />
								<p className="terms">I agree to all terms and condition</p>
							</div>

							<button className="submit-signup my-button" onClick={handleEmailClick} type="submit" value="CREATE ACCOUNT">Create Account</button>
							<button className="my-button" onClick={handleGoogleClick} >SignUp with Google</button>
							<button className="my-button" onClick={continueGuest} >Continue as Guest</button>

						</form>
					</div>

					<div className="more-info">
						<h2>StreamZone</h2>
						<p className="headline">Streamzone aims to provide similar features to YouTube while offering a unique experience for its users.</p>
						<button className="btn">Learn More</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default Signin;
