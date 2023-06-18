import React, { useState } from 'react';
import { useParams } from 'react-router-dom';



function BookingTicket() {
    const  ticketNumber=7;
    console.log('Ticket numer '+ticketNumber);
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    identityNumber: '',
    email: '',
    phone: '',
    ticketNumber:ticketNumber
  
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingData = {
      ...formData
      
    };

    // Perform your API request to save the booking ticket data
    // Example using fetch:
    fetch('https://localhost:5001/api/BookingTicket', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert('Booking ticket created successfully!');
        // Perform any necessary actions after successful booking
      })
      .catch((error) => console.log(error));
  };

  return (
    
    <div>
       
      <h2>Booking Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div>
          <label>Identity Number:</label>
          <input type="text" name="identityNumber" value={formData.identityNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div>
          <label>Ticket Number:</label>
          <input type="text" value={ticketNumber} readOnly />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookingTicket;
