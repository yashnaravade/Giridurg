import "./App.css";

import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <About />
    </div>
  );
}

export default App;
