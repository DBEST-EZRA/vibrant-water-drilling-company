import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* Introduction Section */}
      <section
        className="d-flex align-items-center justify-content-center text-center text-white bg-dark"
        style={{
          height: "60vh",
          backgroundImage: "url('https://picsum.photos/1920/1080?grayscale')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h1 className="display-4 fw-bold">Vibrant Water Drilling Company</h1>
          <p className="lead mt-3">
            Delivering reliable water solutions with precision and efficiency.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="container py-5" data-aos="fade-up">
        <h2 className="text-center mb-4">Our Services</h2>
        <div className="row g-4">
          {[
            { title: "Water Well Drilling", icon: "🔧" },
            { title: "Borehole Maintenance", icon: "🛠️" },
            { title: "Water Consultancy", icon: "💧" },
          ].map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className="card text-center shadow-sm border-0 h-100">
                <div className="card-body">
                  <div
                    className="display-4"
                    style={{ fontSize: "3rem", marginBottom: "1rem" }}
                  >
                    {service.icon}
                  </div>
                  <h5 className="card-title fw-bold">{service.title}</h5>
                  <p className="card-text">
                    High-quality {service.title.toLowerCase()} services tailored
                    to meet your needs.
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <button className="btn btn-outline-primary">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-light py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center mb-4">Meet Our Team</h2>
          <div className="row g-4">
            {[
              { name: "John Doe", role: "CEO" },
              { name: "Jane Smith", role: "Operations Manager" },
              { name: "Michael Brown", role: "Lead Technician" },
            ].map((member, index) => (
              <div className="col-md-4" key={index}>
                <div className="card text-center shadow-sm border-0">
                  <img
                    src={`https://picsum.photos/300/300?random=${index}`}
                    alt={`${member.name}`}
                    className="card-img-top"
                    style={{
                      height: "300px",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.transform = "scale(1.1)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{member.name}</h5>
                    <p className="card-text">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
