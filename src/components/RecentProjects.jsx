import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import introImage from "../images/cover.jpg";

const projects = [
  {
    id: 1,
    title: "Project Alpha",
    description:
      "This is a description of Project Alpha. It involved water drilling in challenging terrains.",
    backgroundImage: `url(${introImage})`, // Replace with your image URL
  },
  {
    id: 2,
    title: "Project Beta",
    description:
      "This is a description of Project Beta. It focused on efficient water resource management.",
    backgroundImage: `url(${introImage})`, // Replace with your image URL
  },
  {
    id: 3,
    title: "Project Gamma",
    description:
      "This is a description of Project Gamma. It utilized advanced drilling technologies.",
    backgroundImage: `url(${introImage})`, // Replace with your image URL
  },
];

const RecentProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next project
  const handleNextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Our Recent Projects</h2>

      {/* Card Display */}
      <div
        className="card mx-auto d-flex flex-row align-items-center"
        style={{
          maxWidth: "800px",
          height: "300px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Project Image */}
        <div
          className="flex-shrink-0"
          style={{
            width: "50%",
            height: "100%",
            backgroundImage: `url(${projects[currentIndex].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "transform 0.5s ease-in-out",
          }}
        ></div>

        {/* Project Description */}
        <div
          className="flex-grow-1 d-flex flex-column justify-content-center p-3 text-white"
          style={{
            backgroundColor: "#00c6ff",
            transition: "transform 0.5s ease-in-out",
          }}
        >
          <h4>{projects[currentIndex].title}</h4>
          <p>{projects[currentIndex].description}</p>
        </div>
      </div>

      {/* Next Button */}
      <div className="text-center mt-3">
        <button className="btn btn-primary" onClick={handleNextProject}>
          Next Project
        </button>
      </div>
    </div>
  );
};

export default RecentProjects;
