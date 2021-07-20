import React, { useState, useEffect } from 'react';
import '../App.css';
import db from '../firebaseConfig';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect, Route } from 'react-router-dom';
import NavigationBar from './header/NavigationBar';
import Signup from './header/Signup';
import Login from './header/Login';
import EditProfile from './header/EditProfile';
import AddProject from './main/AddProject';
import Projects from './main/Projects';
import Home from './main/Home';
import AboutUs from './main/AboutUs';

function Pages() {

  const [registeredData, setRegisteredData] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState("");
  
  useEffect(() => {
    const arrayOfData = [];
    
    db.collection("developer").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        arrayOfData.push({id: doc.id, ...doc.data()});
      });
    });
    
    db.collection("projectManagers").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        arrayOfData.push({id: doc.id, ...doc.data()});
      });
    });

    setRegisteredData(arrayOfData);
  }, []);

  return (
    <>
      <NavigationBar currentUser={loggedInUser} setCurrentUser={setLoggedInUser} />
      <Route path="/projects"><Projects loggedInUser={loggedInUser} /></Route>
      <Route exact path="/"><Home loggedInUser={loggedInUser} /></Route>
      <Route exact path="/about" component={AboutUs} />
      { loggedInUser.occupation === 'manager' && <Route path="/add-project" component={AddProject} /> }
      <Route path="/sign-up">{ loggedInUser === "" ? <Signup registeredData={registeredData} setLoggedInUser={setLoggedInUser} /> : <Redirect to='/' /> }</Route>
      <Route path="/login">{ loggedInUser === "" ? <Login registeredData={registeredData} setLoggedInUser={setLoggedInUser} /> : <Redirect to='/' /> }</Route>
      { loggedInUser && <Route path={'/' + loggedInUser.username}><EditProfile registeredData={registeredData} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} /></Route> }
    </>
  );
}

export default Pages;