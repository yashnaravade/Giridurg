import "./App.css";

import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/About/About";
import OurRooms from "./components/OurRooms/OurRooms";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <About />
      <OurRooms />
      <Gallery />
    </div>
  );
}

export default App;
