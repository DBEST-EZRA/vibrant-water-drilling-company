import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const GetInTouch = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="py-5"
      style={{
        position: "relative",
        backgroundColor: "rgba(1, 50, 123, 0.1)", // Light background with reduced opacity
        overflow: "hidden",
      }}
    >
      {/* Background Animation */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          top: 0,
          left: "-100%",
          backgroundColor: "rgba(1, 50, 123, 0.2)", // Slightly darker shade
          zIndex: -1,
          animation: "slideInFromLeft 1.5s forwards",
        }}
      ></div>

      <div className="container" data-aos="fade-up">
        <h2
          className="text-center fw-bold mb-4"
          style={{
            color: "#01327b",
            animation: "fadeIn 1s ease 1.5s forwards",
            opacity: 0,
          }}
        >
          Get in touch with us today and have your Borehole done in three phases
          for better financial plan.
        </h2>
        <ul className="list-unstyled d-flex flex-column align-items-start justify-content-center">
          {[
            {
              text: "Design and installation of borehole pumping systems in Kenya: After drilling process and test pumping, we do installation of submersible pumps in boreholes and shallow wells.",
              iconColor: "#4CAF50", // Green
              icon: "💧",
            },
            {
              text: "Fabrication and installation of elevated tanks and towers: We offer both steel tank and plastic tank installations.",
              iconColor: "#FF9800", // Orange
              icon: "🏗️",
            },
            {
              text: "Installation of pipelines and distribution networks.",
              iconColor: "#2196F3", // Blue
              icon: "🔧",
            },
          ].map((item, index) => (
            <li
              key={index}
              style={{
                animation: `slideInFromRight 1s ease ${
                  0.5 * (index + 1)
                }s forwards`,
                opacity: 0,
              }}
              className="d-flex align-items-center mb-3"
            >
              <div
                className="d-flex align-items-center justify-content-center rounded-circle me-3"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: item.iconColor,
                  color: "white",
                  fontSize: "1.5rem",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <p className="text-muted mb-0">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes slideInFromLeft {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(0); }
          }

          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          @keyframes slideInFromRight {
            0% { transform: translateX(100%); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
        `}
      </style>
    </section>
  );
};

export default GetInTouch;
