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

      {/* About Us Section */}
      <section className="container py-5" data-aos="fade-up">
        <h2 className="text-center mb-4">About Us</h2>
        <div className="row g-4">
          <div className="col-12">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <p className="card-text fs-5 text-muted">
                  Welcome to <strong>Vibrant Water Drilling Company</strong>,
                  your trusted partner in delivering dependable water solutions
                  across Kenya. With over a decade of experience, we have
                  established ourselves as leaders in water drilling and
                  consultancy services. Our team combines state-of-the-art
                  technology with an unwavering commitment to quality, ensuring
                  sustainable and efficient water solutions for our clients.
                </p>
                <p className="card-text fs-5 text-muted">
                  Established 10 years ago, we pride ourselves on being pioneers
                  in the industry, working diligently to provide communities and
                  businesses with access to clean and reliable water sources.
                  From drilling water wells to maintaining boreholes, our
                  services are tailored to meet diverse needs while upholding
                  the highest standards of professionalism and environmental
                  care.
                </p>
                <p className="card-text fs-5 text-muted">
                  Our operations are built on trust, innovation, and a passion
                  for making a difference. Whether you're looking for expert
                  advice, precision drilling, or maintenance services, we are
                  here to guide you every step of the way. At Vibrant Water
                  Drilling Company, we believe in fostering long-lasting
                  partnerships with our clients by delivering exceptional
                  results that exceed expectations.
                </p>
                <p className="card-text fs-5 text-muted">
                  Join us as we continue to shape the future of water
                  accessibility in Kenya, one project at a time. Together, we
                  can create a sustainable and vibrant future for all.
                </p>
              </div>
            </div>
          </div>
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
