import React, { useEffect, useState } from "react";
import "./stats.css";

const Stats = () => {
  const stats = [
    { id: 1, label: "Boreholes Drilled", value: 500 },
    { id: 2, label: "Successful Projects", value: 1200 },
    { id: 3, label: "Happy Clients", value: 850 },
    { id: 4, label: "Years of Experience", value: 10 },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  const handleScroll = () => {
    const section = document.getElementById("stats-section");
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop <= window.innerHeight && counters.some((val) => val === 0)) {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 1000; // 1 second
        const stepTime = Math.abs(Math.floor(duration / end));

        const timer = setInterval(() => {
          start += 1;
          setCounters((prev) => {
            const updated = [...prev];
            updated[index] = start;
            return updated;
          });

          if (start >= end) {
            clearInterval(timer);
          }
        }, stepTime);
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [counters]);

  return (
    <section id="stats-section" className="stats-section">
      <h2 className="stats-heading">Our Achievements</h2>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={stat.id} className="stat-item">
            <span className="stat-value">{counters[index]}</span>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
