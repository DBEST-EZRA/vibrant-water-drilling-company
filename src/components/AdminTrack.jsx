import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AdminTrack = () => {
  const [cards, setCards] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    trackingNumber: "",
    name: "",
    siteName: "",
    address: "",
    paymentStatus: "",
    workDatesFrom: "",
    workDatesTo: "",
    status: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
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
    ];

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
        return "text-warning";
      case "Completed":
        return "text-success";
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

  const filteredCards = cards.filter((card) =>
    card.trackingNumber.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    const newCard = {
      ...formData,
      trackingNumber:
        editIndex !== null ? cards[editIndex].trackingNumber : `${Date.now()}`,
      workDates: `${formData.workDatesFrom}-${formData.workDatesTo}`,
    };

    if (editIndex !== null) {
      const updatedCards = [...cards];
      updatedCards[editIndex] = newCard;
      setCards(updatedCards);
    } else {
      setCards((prevCards) => [...prevCards, newCard]);
    }

    setShowModal(false);
    setFormData({
      trackingNumber: "",
      name: "",
      siteName: "",
      address: "",
      paymentStatus: "",
      workDatesFrom: "",
      workDatesTo: "",
      status: "",
    });
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    const card = cards[index];
    const [workDatesFrom, workDatesTo] = card.workDates.split("-");
    setFormData({
      ...card,
      workDatesFrom,
      workDatesTo,
    });
    setEditIndex(index);
    setShowModal(true);
  };

  const handleDelete = (index) => {
    setCards((prevCards) => prevCards.filter((_, i) => i !== index));
  };

  return (
    <>
      <section
        className="p-5 bg-light"
        style={{ position: "relative" }}
        data-aos="fade-up"
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Enter Tracking Number Below</h2>
          <p className="text-muted mb-4">
            Enter your tracking number below to see the progress of your order.
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <div className="input-group w-75 w-md-50">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter your tracking number"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                style={{
                  borderTopLeftRadius: "25px",
                  borderBottomLeftRadius: "25px",
                  transition: "all 0.3s",
                }}
              />
              {searchValue && (
                <button
                  className="btn btn-light border"
                  onClick={() => setSearchValue("")}
                  style={{
                    borderTopRightRadius: "0",
                    borderBottomRightRadius: "0",
                    zIndex: 1,
                  }}
                >
                  &#x2715;
                </button>
              )}
              <button
                className="btn btn-primary"
                style={{
                  borderTopRightRadius: "25px",
                  borderBottomRightRadius: "25px",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="container text-center mb-4">
        <button className="btn btn-success" onClick={() => setShowModal(true)}>
          Add New Order
        </button>
      </div>

      <section className="p-5" data-aos="fade-up">
        <div className="container">
          <div className="row row-cols-1">
            {filteredCards.map((card, index) => (
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
                        <p className="card-text">
                          Work Dates: {card.workDates}
                        </p>
                        <p
                          className={`card-text fw-bold ${getStatusTextColor(
                            card.status
                          )}`}
                        >
                          Order Status: {card.status}
                        </p>
                        <div className="mt-3">
                          <button
                            className="btn btn-primary me-2"
                            onClick={() => handleEdit(index)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(index)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showModal && (
        <div
          className="modal show d-block"
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {editIndex !== null ? "Edit Order" : "Add New Order"}
                </h5>
                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Site Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="siteName"
                    value={formData.siteName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Payment Status</label>
                  <select
                    className="form-select"
                    name="paymentStatus"
                    value={formData.paymentStatus}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Payment Status</option>
                    <option value="Paid">Paid</option>
                    <option value="Pending">Pending</option>
                    <option value="Unpaid">Unpaid</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Work Dates (From)</label>
                  <input
                    type="date"
                    className="form-control"
                    name="workDatesFrom"
                    value={formData.workDatesFrom}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Work Dates (To)</label>
                  <input
                    type="date"
                    className="form-control"
                    name="workDatesTo"
                    value={formData.workDatesTo}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Order Status</label>
                  <select
                    className="form-select"
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Order Status</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="Queued">Queued</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminTrack;
