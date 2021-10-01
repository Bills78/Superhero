import Nav from "./comps/Navbar";
import Home from "./Home";
import About from "./About"
import AllHero from "./AllHero"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/allheroes">
              <AllHero />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
