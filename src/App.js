import './App.css';
import Contact from './components/Contact';
import Main from './components/Main';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import NavbarComp from './components/NavbarComp';
import FooterComp from './components/FooterComp';
import FeaturedComp from './components/FeaturedComp';
import HotDeal from './components/HotDeal';

function App() {
  return (
      <>
      <Router>

        <NavbarComp/>
        <Switch>
          <Route exact path="/">
              <Main/>

          </Route>
          <Route  path="/features">
              <FeaturedComp />

          </Route>
          <Route  path="/hotdeals">
              <HotDeal />

          </Route>
          <Route exact path="/contact">
              <Contact />

          </Route>
          
        </Switch>

        <FooterComp/>
      </Router>
      </>
  );
}

export default App;
