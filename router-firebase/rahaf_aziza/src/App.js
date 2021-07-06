import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import Nav from "./components/Nav";
import Users from "./components/Users";

function App() {
  return (
    <Router>
      <Route path="/" component={Nav} />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={ContactUs} />
      <Route path="/users" component={Users} />
    </Router>
  );
}

export default App;
