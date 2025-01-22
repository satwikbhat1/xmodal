import React, { useState } from "react";

const XModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate all fields
    if (!formValues.username) {
      alert("Please fill in the username field.");
      return;
    }

    if (!formValues.email || !formValues.email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if (!formValues.phone) {
      alert("Please fill in the phone number field.");
      return;
    } else if (formValues.phone.length !== 10 || isNaN(formValues.phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    if (!formValues.dob) {
      alert("Please fill in the date of birth field.");
      return;
    } else if (new Date(formValues.dob) > new Date()) {
      alert("Invalid date of birth. Please enter a past date.");
      return;
    }

    // All validations passed, reset the form and close the modal
    alert("Form submitted successfully!");
    setFormValues({
      username: "",
      email: "",
      phone: "",
      dob: "",
    });
    setIsModalOpen(false);
  };

  // Handle close modal when clicking outside modal content
  const handleCloseModal = (e) => {
    if (e.target.classList.contains("modal")) {
      setIsModalOpen(false);
    }
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Form</button>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  value={formValues.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone">Phone:</label>
                <input
                  type="text"
                  id="phone"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="dob">Date of Birth:</label>
                <input
                  type="date"
                  id="dob"
                  value={formValues.dob}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
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
};

export default XModal;
