import './App.css';
import React from 'react';
import {Home} from "./components/Home";
import About from "./components/About";
import Contact from "./components/ContactUs";
import {Nav} from "./components/Nav";
import Users from './components/Users';
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About}/>
        <Route path="/Contact-Us" component={Contact}/>
        <Route path="/Users" component={Users}/>
      </Router>
    </div>
  );
}

export default App;