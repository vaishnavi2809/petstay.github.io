import React, { useState } from "react";

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    petType: "",
    checkIn: "",
    checkOut: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Booking confirmed for ${formData.name}!`);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Book Your Pet Stay</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Pet Type:
          <select name="petType" value={formData.petType} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>
          Check-in Date:
          <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Check-out Date:
          <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookNow;
