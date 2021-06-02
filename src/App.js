import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/Home/sections/About';
import Contact from './components/Contact/Contact';
import ChineseMenu from './components/Menu/Chinese/ChineseMenu';
import ThaiMenu from './components/Menu/Thai/ThaiMenu';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/ChineseMenu">
            <ChineseMenu/>
          </Route>
          <Route path="/ThaiMenu">
            <ThaiMenu/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
        </Switch>  
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
