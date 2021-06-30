import React, { useEffect, useState } from "react";
import db from "../firebaseConfig";
import User from "./User"

const Users = () => {
  // const userCollection = [{ email: "test2@test.com", userName: "test2", password: "test2", id: "YuTntyHAYZBbD4nbWDFe" }, { password: "test1", userName: "test", email: "test@test.com", id: "Ts0ZDCEPxK6dpM8ULhYK" }]
  const [userCollection, setUserCollection] = useState([]) 
  useEffect(() => {
    db.collection("users")
    .onSnapshot((querySnapshot) => {
      const userList = []
        querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            userList.push({...doc.data(), id:doc.id})
            // console.log(doc.id, " => ", doc.data());            
        });
        setUserCollection(userList)
        //  console.log(userCollection) //Usercollection is an array of two elements here       
    }, (error) => console.log(error))    
  },[])
  // console.log(userCollection)

  return (
    <div>
      <h1>Our Users</h1>
      {userCollection.map((user) =>  <User user={user} key={user.id} />) }
    </div>)
};

export default Users;

