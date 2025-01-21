import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";

const SearchSection = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const clearSearch = () => {
    setSearchValue("");
  };

  return (
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
              onChange={handleInputChange}
              style={{
                borderTopLeftRadius: "25px",
                borderBottomLeftRadius: "25px",
                transition: "all 0.3s",
              }}
            />
            {searchValue && (
              <button
                className="btn btn-light border"
                onClick={clearSearch}
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
  );
};

export default SearchSection;
