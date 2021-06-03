import Hero from './sections/Hero';
import About from './sections/About';
import Quote from './sections/Quote';
import Specils from './sections/Specils';
import GoogleMap from './sections/GoogleMap';
import animation from '../../components/Animations.js';
const Home = () => {
  animation("Home");
    return (
      <div>
        <Hero />
        <Specils />
        <About />
        <Quote />
        <GoogleMap />
      </div>
    )
}
export default Home;
