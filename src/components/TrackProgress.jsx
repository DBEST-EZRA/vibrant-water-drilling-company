import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import SearchSection from "./SearchSection";
import CardSection from "./SearchSection";

const TrackProgress = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      {/* Search section start  */}
      <SearchSection />
      {/* Search section end  */}
      {/* Cards section start  */}
      <CardSection />
      {/* Cards section end  */}
    </div>
  );
};

export default TrackProgress;
