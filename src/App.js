// Modal.jsx
import React, { useState } from "react";

const XModal = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    phone: '',
    dob: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Username validation
    if (!formValues.username) {
      alert('Please fill in the username field.');
      return;
    }

    // Email validation
    if (!formValues.email) {
      alert('Please fill in the email field.');
      return;
    } else if (!formValues.email.includes('@')) {
      alert('Invalid email. Please check your email address.');
      return;
    }

    // Phone validation
    if (!formValues.phone) {
      alert('Please fill in the phone number field.');
      return;
    } else if (formValues.phone.length !== 10 || isNaN(formValues.phone)) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }

    // Date of Birth validation
    if (!formValues.dob) {
      alert('Please fill in the date of birth field.');
      return;
    } else if (new Date(formValues.dob) > new Date()) {
      alert('Invalid date of birth. Please enter a past date.');
      return;
    }

    // Submit the form if all inputs are valid
    alert('Form submitted successfully!');
    setIsModalOpen(false);
    setFormValues({
      username: '',
      email: '',
      phone: '',
      dob: '',
    });
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = (e) => {
    if (e.target.classList.contains("modal")) {
      setIsModalOpen(false);
    }
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Form</button>

      {isModalOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formValues.username}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  value={formValues.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="dob">Date of Birth</label>
                <input
                  id="dob"
                  name="dob"
                  type="date"
                  value={formValues.dob}
                  onChange={handleInputChange}
                />
              </div>

              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default XModal;
