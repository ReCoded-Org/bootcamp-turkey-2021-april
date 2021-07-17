//import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Boards from "./components/Boards";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Completed from "./components/Completed";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "./Context/Theme";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div>
          <header className="App-header">
            <NavBar />
          </header>
          <Switch>
            <Route exact path="/">
              <Boards />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/completed">
              <Completed />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
