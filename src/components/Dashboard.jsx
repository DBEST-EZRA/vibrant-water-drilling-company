import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("Home");

  const components = {
    Home: <div>Welcome to the Dashboard Home!</div>,
    Orders: <div>View and manage new orders here.</div>,
    Users: <div>Manage user accounts and permissions.</div>,
    Reports: <div>View reports and analytics.</div>,
    Settings: <div>Adjust your application settings.</div>,
  };

  return (
    <div className="d-flex">
      {/* Left Side Navigation */}
      <div
        className="d-flex flex-column bg-dark text-white p-3"
        style={{ width: "250px", minHeight: "100vh" }}
      >
        <h3 className="text-center mb-4">Dashboard</h3>
        <nav className="nav flex-column">
          {Object.keys(components).map((key) => (
            <button
              key={key}
              className={`btn text-start text-white mb-2 ${
                activeComponent === key ? "btn-primary" : "btn-dark"
              }`}
              onClick={() => setActiveComponent(key)}
            >
              {key}
            </button>
          ))}
        </nav>
        <div className="mt-auto text-center">
          <p className="small mb-0">&copy; Beta Softwares</p>
        </div>
      </div>

      {/* Right Side Content */}
      <div className="flex-grow-1">
        {/* Header */}
        <div className="bg-light p-3 border-bottom">
          <h2 className="mb-0">Admin</h2>
        </div>

        {/* Main Content */}
        <div className="p-4">{components[activeComponent]}</div>
      </div>
    </div>
  );
};

export default Dashboard;
