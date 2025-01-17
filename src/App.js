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
          {/* Default route */}
          <Route
            path="/"
            element={
              <>
                <h1>Vibrant Water Drilling</h1>
                <Stats />
              </>
            }
          />
          {/* Route for About page */}
          <Route path="/about" element={<About />} />
          {/* Route for Services page */}
          <Route path="/services" element={<Services />} />
          {/* Route for Contact page */}
          <Route path="/contact" element={<Contact />} />
          {/* Route for Track Progress page */}
          <Route path="/track-progress" element={<TrackProgress />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
