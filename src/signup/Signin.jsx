import React, { useEffect, useState } from "react";
import { auth, Provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import App from "../App";

const Signin = ({ setuserData }) => {
    
  const [value, setvalue] = useState("");

  const handleGoogleClick = (e) => {
    e.preventDefault();
    signInWithPopup(auth, Provider).then((data) => {
   const newdata=JSON.stringify(data)
     
      localStorage.setItem("data",newdata)
      console.log(data);
      window.location.reload()
     
    
    });
  };



  return (
    <>
      <div className="signup-container">
        <button className="signup-google"  onClick={handleGoogleClick}>
          SignUp with Google
        </button>
      </div>
    </>
  );
};

export default Signin;
