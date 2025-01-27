import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

import introImage from "../images/cover.jpg";

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
          height: "50vh",
          backgroundImage: `url(${introImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h1 className="display-4 fw-bold">Vibrant Water Drilling Company</h1>
          <p className="lead mt-3">
            Over a decade of excellence in water drilling and consultancy
            services.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="container py-5" data-aos="fade-up">
        <h2
          className="text-center mb-4"
          style={{ color: "#01327b", fontWeight: "bold" }}
        >
          About Us
        </h2>
        <div className="row">
          <div className="col-12">
            <h3 className="fw-bold mb-3">Our Vision</h3>
            <p className="text-muted fs-5">
              At <strong>Vibrant Water Drilling Company</strong>, our vision is
              to empower communities and businesses across Kenya with
              sustainable water solutions. We aim to be a driving force in
              ensuring every household, farm, and industry has access to clean
              and reliable water resources.
            </p>

            <h3 className="fw-bold mb-3">Who We Are</h3>
            <p className="text-muted fs-5">
              Based in Nairobi, Kenya,{" "}
              <strong>Vibrant Water Drilling Company</strong> is a leader in
              water drilling, borehole maintenance, and consultancy services.
              With 10 years of experience, we have earned a reputation for
              delivering reliable and innovative solutions tailored to meet the
              diverse needs of our clients.
            </p>

            <h3 className="fw-bold mb-3">Our Expertise</h3>
            <p className="text-muted fs-5">
              We combine advanced drilling technologies, a dedicated team of
              professionals, and eco-friendly practices to deliver precision and
              efficiency in every project. From drilling water wells to
              providing expert consultations, we are committed to excellence at
              every step.
            </p>

            <h3 className="fw-bold mb-3">Our Commitment</h3>
            <p className="text-muted fs-5">
              At Vibrant, we are dedicated to building lasting relationships
              with our clients by consistently exceeding expectations. Our team
              is passionate about contributing to the long-term water security
              of Kenya through projects that are both sustainable and impactful.
            </p>

            <h3 className="fw-bold mb-3">Why Choose Us</h3>
            <p className="text-muted fs-5">
              Choosing Vibrant Water Drilling Company means partnering with a
              team that values trust, innovation, and quality. We deliver
              timely, cost-effective, and customized solutions to ensure your
              water needs are met with precision and care.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-light py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center mb-4">Meet Our Team</h2>
          <div className="row g-4">
            {[
              {
                name: "John Doe",
                role: "CEO",
                img: "https://picsum.photos/300/300?random=1",
              },
              {
                name: "Jane Smith",
                role: "Operations Manager",
                img: "https://picsum.photos/300/300?random=2",
              },
              {
                name: "Michael Brown",
                role: "Lead Technician",
                img: "https://picsum.photos/300/300?random=3",
              },
            ].map((member, index) => (
              <div className="col-md-4" key={index}>
                <div className="card text-center shadow-sm border-0">
                  <img
                    src={member.img}
                    alt={member.name}
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
