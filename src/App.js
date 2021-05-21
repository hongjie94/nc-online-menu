import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import ChineseMenu from './components/Menu/Chinese/ChineseMenu';

function App() {
  return (
    <div className="app">
     <Navbar/>
      <Home/>
      <ChineseMenu/>
     <Footer />
    </div>
  );
}

export default App;
