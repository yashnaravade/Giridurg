import "./App.css";

import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/About/About";
import OurRooms from "./components/OurRooms/OurRooms";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <About />
      <OurRooms />
    </div>
  );
}

export default App;
