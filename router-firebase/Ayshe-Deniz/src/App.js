import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Nav from "./components/Nav"
import Home from "./components/Home"
import About from "./components/About"
import ContactUs from "./components/ContactUs"
import Users from "./components/Users"

function App() {
  return (
    <Router>
      <Route path="/" component={Nav} />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact-us" component={ContactUs} />
      <Route exact path="/users" component={Users} />       
    </Router>
  );
}

export default App;
