import React, { useState } from "react";
// You will be able to use this, when you paste your firestore configs inside the firebaseConfig.js file
import db from "../firebaseConfig";

const Home = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: ""
  })
    
  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value; 
  
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  //Submit form inputs to firebase and then reset input states
  const formSubmit = (e) => {
    e.preventDefault()
    db.collection("users").add(formData)
  .then(() => {
      console.log("Document successfully written!");
  })
  .catch((error) => {
      console.error("Error writing document: ", error);
  });
  setFormData({
    userName: "",
    email: "",
    password: ""
  })
  }

  return (
  <div>
    <form onSubmit={formSubmit}>
    <label>
      <p>User Name</p>
      <input type="text" name="userName" value = {formData.userName} onChange = {handleChange} />
      <p>Email</p>
      <input type="text" name="email" value = {formData.email} onChange = {handleChange}/>
      <p>password</p>
      <input type="password" name="password" value = {formData.password} onChange = {handleChange}/>
    </label>
      <button type="submit">Submit</button>
    </form>
  </div>
  )
};

export default Home