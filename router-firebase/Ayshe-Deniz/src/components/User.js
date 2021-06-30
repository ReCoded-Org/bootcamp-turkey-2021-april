import React, { useState } from "react";
import db from "../firebaseConfig";

const User = ({user}) => {
  const [formData, setFormData] = useState({...user})
    
  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value; 
  
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const deleteUser = (e) => { 
    db.collection("users").doc(e.target.userid).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  const editUser = (e) => {
    e.preventDefault()
    console.log(e.target)

    db.collection("users").doc(e.target.userid).set(formData)
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });

  }

  // console.log(user)
  return (
  <div>
      <form onSubmit={editUser} userid={user.id}>
      <label>
        <p>User Name</p>
        <input type="text" name="userName" value = {formData.userName} onChange = {handleChange} />
        <p>Email</p>
        <input type="text" name="email" value = {formData.email} onChange = {handleChange}/>
        <p>password</p>
        <input type="password" name="password" value = {"*".repeat(formData.password.length)} onChange = {handleChange}/>
      </label>
        <button type="submit">Submit Changes</button>
      </form>

    <button onClick={editUser} userid={user.id}>Edit User</button>
    <button onClick={deleteUser} userid={user.id}>Delete User</button>
  </div>)
};

export default User;

