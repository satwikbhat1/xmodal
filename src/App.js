import React, { useState } from "react";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, phone, dob } = formValues;

    if (!username) {
      alert("Please fill in the username field.");
      return;
    }

    if (!email) {
      alert("Please fill in the email field.");
      return;
    } else if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if (!phone) {
      alert("Please fill in the phone number field.");
      return;
    } else if (phone.length !== 10 || isNaN(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    if (!dob) {
      alert("Please fill in the date of birth field.");
      return;
    } else if (new Date(dob) > new Date()) {
      alert("Invalid date of birth. Please enter a past date.");
      return;
    }

    alert("Form submitted successfully!");
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="app">
      <h1>User Details Modal</h1>
      <div className="button">
        <button onClick={openModal}>Open Form</button>
      </div>
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSubmit}>
              <h2 style={{ textAlign: "center" }}>Fill Details</h2>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={formValues.username}
                onChange={handleInputChange}
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={formValues.email}
                onChange={handleInputChange}
              />

              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                value={formValues.phone}
                onChange={handleInputChange}
              />

              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                value={formValues.dob}
                onChange={handleInputChange}
              />
              <div className="sbt">
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
