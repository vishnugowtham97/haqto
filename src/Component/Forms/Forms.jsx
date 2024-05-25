import React, { useState } from "react";
import "./Forms.css";

const Forms = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    travelClass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          padding: "5rem",
          fontSize: "40px",
          color: "white",
          position: "relative",
          zIndex: "10000",
        }}
      >
        Domestic and International Flights
      </h1>
      <div className="ticket-booking-form">
        <form onSubmit={handleSubmit}>
          <div class="coolinput">
            <label for="input" class="text">
              From:
            </label>
            <input
              type="text"
              placeholder="Write here..."
              name="input"
              class="input"
            />
          </div>
          <div class="coolinput">
            <label for="input" class="text">
              To:
            </label>
            <input
              type="text"
              placeholder="Write here..."
              name="input"
              class="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="departureDate">Departure Date:</label>
            <input
              type="date"
              id="departureDate"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="returnDate">Return Date:</label>
            <input
              type="date"
              id="returnDate"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="travelClass">Travel Class:</label>
            <select
              id="travelClass"
              name="travelClass"
              value={formData.travelClass}
              onChange={handleChange}
              required
            >
              <option value="">Select Class</option>
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
              <option value="First">First</option>
            </select>
          </div>
        </form>
        <button type="submit">Book Now</button>
      </div>
    </div>
  );
};

export default Forms;
