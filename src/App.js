import './App.css';
import Navbar from './components/Navbar';
import Landing from "./components/Landing"
import About from './components/About';
import Events from './components/Events';
import SponsorMarquee from './components/SponsorMarquee';
import Details from './components/Details';
import Contact from './components/Contact';
import Collages from './components/Collages';
import Event from './components/Event';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Collages />
      <About />
      {/* <Events /> */}
      {/* <Event /> */}
      <SponsorMarquee />
      <Details />
      <Contact />
    </div>
  );
}

export default App;
