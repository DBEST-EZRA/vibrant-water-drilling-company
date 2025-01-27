import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Stats from "./Stats";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import TrackProgress from "./TrackProgress";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonials from "./Testimonials";
import HeroSection from "./HeroSection";
import HomeServices from "./HomeServices";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <HomeServices />
                <Stats />
                <Testimonials />
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
};

export default Home;
