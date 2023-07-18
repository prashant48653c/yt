import React, { useEffect, useState } from "react";
import { auth, Provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import App from "../App";

const Signin = ({ setuserData }) => {
    
  const [value, setvalue] = useState("");
  const [email, setemail] = useState('')
  const [pass, setpass] = useState('')

  const handleEmailClick=(e)=>{
e.preventDefault();
signInWithEmailAndPassword(auth,email,pass).then((data)=>{
	console.log(data)
	const newdata=true
     
	localStorage.setItem("data",newdata)
	window.location.reload()
})

  }

  const handleGoogleClick = (e) => {
    e.preventDefault();
    signInWithPopup(auth, Provider).then((data) => {
   const newdata=JSON.stringify(data)
     
      localStorage.setItem("data",newdata)
    //   console.log(data);
      window.location.reload()
     
    
    });
  };



  return (
    <>
    <section className="signup-container">
	

	<div className="signup-box">
		
		<div className="signup-area">
			 <form action="" className="form">
			 	<div className="create-account">
  <span className="highlight">Create</span> an Account
</div>

			 	<input type="text" className=" my-input username-signup" name="username"/>
			 	<input type="email " onChange={(e)=>setemail(e.target.value)} value={email} className=" my-input username-signup" name="email"/>
			 	<input type="password"   onChange={(e)=>setpass(e.target.value)} value={pass} className=" my-input username-signup" name="password"/>
			 	<div className="agreement">
			 		<input type="checkbox" name="check"/>
			 	<p className="terms">I agree to all terms and condition</p>
			 	</div>
			 	
			 	<input className="submit-signup my-button" onClick={handleEmailClick} type="submit" value="CREATE ACCOUNT" />
        <button className="my-button" onClick={handleGoogleClick} >SignUp with Google</button>
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
