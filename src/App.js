import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import TrackProgress from "./components/TrackProgress";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Vibrant Water Drilling</h1>
                <Stats />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/track-progress" element={<TrackProgress />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
