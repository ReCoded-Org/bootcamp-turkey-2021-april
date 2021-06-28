import React, { useState } from "react";
// You will be able to use this, when you paste your firestore configs inside the firebaseConfig.js file
import db from "../firebaseConfig";

export const Home = () => {

  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: ""
  });

  function handleInputChange(e) {
    setUserInfo({...userInfo, 
      [e.target.name]: e.target.value 
    });
  }

  function resetInputs() { document.querySelectorAll('.formInput').forEach(input => input.value = "") };

  return <div>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        db.collection("usersInfo").doc(userInfo.username).set({
          username: userInfo.username,
          email: userInfo.email,
          password: userInfo.password
        });
        resetInputs();
      }}
    >
      <input className="formInput" type="text" name="username" placeholder="Username" onChange={handleInputChange}></input>
      <input className="formInput" type="email" name="email" placeholder="E-mail" onChange={handleInputChange} ></input>
      <input className="formInput" type="password" name="password" placeholder="Password" onChange={handleInputChange} ></input>
      <input type="submit"></input>
    </form>
  </div>;
};
