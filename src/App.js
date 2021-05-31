import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './pages/Navbar/Navbar';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import About from './pages/Home/sections/About';
import Contact from './pages/Contact/Contact';
import ChineseMenu from './pages/Menu/Chinese/ChineseMenu';
import ThaiMenu from './pages/Menu/Thai/ThaiMenu';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/menu">
            <Menu/>
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
