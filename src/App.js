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
  const [errorMessages, setErrorMessages] = useState([]);

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
    const errors = [];

    if (!username) {
      errors.push("Please fill in the username field.");
    }

    if (!email) {
      errors.push("Please fill in the email field.");
    } else if (!email.includes("@")) {
      errors.push("Invalid email. Please check your email address.");
    }

    if (!phone) {
      errors.push("Please fill in the phone number field.");
    } else if (phone.length !== 10 || isNaN(phone)) {
      errors.push("Invalid phone number. Please enter a 10-digit phone number.");
    }

    if (!dob) {
      errors.push("Please fill in the date of birth field.");
    } else if (new Date(dob) > new Date()) {
      errors.push("Invalid date of birth. Please enter a past date.");
    }

    if (errors.length > 0) {
      setErrorMessages(errors);
      return;
    }

    alert("Form submitted successfully!");
    setIsModalOpen(false);
    setErrorMessages([]); // Clear errors on successful submission
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setErrorMessages([]); // Clear errors when closing the modal
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
              {errorMessages.length > 0 && (
                <div className="error-messages">
                  {errorMessages.map((error, index) => (
                    <p key={index} style={{ color: "red" }}>
                      {error}
                    </p>
                  ))}
                </div>
              )}
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
