import React, { useEffect, useState } from "react";
import { auth, Provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import App from "../App";
import { useNavigate } from "react-router-dom";
const Signin = ({ setuserData }) => {
    const navigate=useNavigate()
  const [value, setvalue] = useState("");

  const handleGoogleClick = (e) => {
    e.preventDefault();
    signInWithPopup(auth, Provider).then((data) => {
      setvalue(data.user.value);
      localStorage.setItem("email", value);
      console.log(data);
      setuserData(data);
      navigate('/')
    });
  };

  useEffect(() => {
    setvalue(localStorage.getItem("email"));
  });

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
