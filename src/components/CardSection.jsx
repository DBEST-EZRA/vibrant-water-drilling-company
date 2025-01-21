import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";

const CardSection = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Example data (replace with your dynamic data fetching)
    const today = new Date();

    const exampleCards = [
      {
        trackingNumber: "12345",
        name: "John Doe",
        siteName: "Blue Lagoon",
        address: "123 Waterway, Springfield",
        paymentStatus: "Paid",
        workDates: "Jan 23-Jan 25",
        status: "In Progress",
      },
      {
        trackingNumber: "67890",
        name: "Jane Smith",
        siteName: "Crystal Well",
        address: "456 River Rd, Shelbyville",
        paymentStatus: "Pending",
        workDates: "Jan 21-Jan 22",
        status: "Completed",
      },
      {
        trackingNumber: "54321",
        name: "Alice Johnson",
        siteName: "Golden Spring",
        address: "789 Lakeview, Ogdenville",
        paymentStatus: "Unpaid",
        workDates: "Jan 27-Jan 29",
        status: "Queued",
      },
    ];

    // Sort cards by precedence (earliest dates first)
    const sortedCards = exampleCards.sort((a, b) => {
      const getDate = (dates) => {
        const [startDate] = dates.split("-");
        return new Date(`${startDate} ${new Date().getFullYear()}`);
      };

      return getDate(a.workDates) - getDate(b.workDates);
    });

    setCards(sortedCards);
  }, []);

  const getStatusTextColor = (status) => {
    switch (status) {
      case "In Progress":
        return "text-success";
      case "Completed":
        return "text-danger";
      case "Queued":
        return "text-info";
      default:
        return "text-secondary";
    }
  };

  const getPaymentTextColor = (paymentStatus) => {
    switch (paymentStatus) {
      case "Paid":
        return "text-success";
      case "Pending":
        return "text-warning";
      case "Unpaid":
        return "text-danger";
      default:
        return "text-secondary";
    }
  };

  return (
    <section className="p-5" data-aos="fade-up">
      <div className="container">
        <div className="row row-cols-1">
          {cards.map((card, index) => (
            <div
              className="col mb-4"
              key={index}
              style={{ transition: "transform 0.3s", cursor: "pointer" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <div
                className="card shadow-sm bg-light"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <h5 className="card-title">
                        Tracking Number: {card.trackingNumber}
                      </h5>
                      <p className="card-text">Name: {card.name}</p>
                      <p className="card-text">
                        Drilling Site: {card.siteName}
                      </p>
                      <p className="card-text">Address: {card.address}</p>
                    </div>
                    <div className="col-md-6">
                      <p
                        className={`card-text fw-bold ${getPaymentTextColor(
                          card.paymentStatus
                        )}`}
                      >
                        Payment Status: {card.paymentStatus}
                      </p>
                      <p className="card-text">Work Dates: {card.workDates}</p>
                      <p
                        className={`card-text fw-bold ${getStatusTextColor(
                          card.status
                        )}`}
                      >
                        Order Status: {card.status}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
