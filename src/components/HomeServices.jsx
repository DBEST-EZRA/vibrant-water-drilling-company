import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      title: "Water Well Drilling",
      description:
        "We provide professional water well drilling services, ensuring a reliable and sustainable water source for your needs.",
      image: "https://via.placeholder.com/300x200?text=Well+Drilling",
    },
    {
      title: "Borehole Maintenance",
      description:
        "Our borehole maintenance services ensure optimal performance and longevity of your water systems.",
      image: "https://via.placeholder.com/300x200?text=Borehole+Maintenance",
    },
    {
      title: "Water Consultancy",
      description:
        "Get expert advice on water management and solutions tailored to your unique requirements.",
      image: "https://via.placeholder.com/300x200?text=Water+Consultancy",
    },
  ];

  return (
    <div>
      {/* Services Section */}
      <section className="container py-5" data-aos="fade-up">
        <h2 className="text-center mb-4">Our Services</h2>
        <p className="text-center mb-5">
          At Vibrant Water Drilling Company, we are dedicated to providing
          high-quality water solutions tailored to meet your needs. Whether it's
          drilling water wells, maintaining boreholes, or offering expert
          consultancy, we are committed to delivering excellence in every
          project we undertake.
        </p>
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="card shadow-sm border-0 h-100"
                style={{
                  backgroundColor: "#f8f9fa", // Light gray background
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="card-img-top"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeServices;
