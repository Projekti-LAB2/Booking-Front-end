import React, { useState, useEffect } from 'react';
import './PostTicket.css';
import Header from '../Header';
const PostTicket = () => {
  const [cities, setCities] = useState([]);
  const [startPoints, setStartPoints] = useState([]);
  const [ticketData, setTicketData] = useState({
    TicketNumber: '',
    Price: 0,
    StartPointId: '',
    CityId: '',
    Time: '',
    Date: ''
  });

  useEffect(() => {
    // Fetch cities and start points from the backend API
    fetchCities();
    fetchStartPoints();
  }, []);

  const fetchCities = async () => {
    try {
      const response = await fetch('https://localhost:5001/api/City'); // Replace with your actual API endpoint for fetching cities
      const data = await response.json();
      setCities(data);
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };

  const fetchStartPoints = async () => {
    try {
      const response = await fetch('https://localhost:5001/api/StartPoint'); // Replace with your actual API endpoint for fetching start points
      const data = await response.json();
      setStartPoints(data);
    } catch (error) {
      console.error('Error fetching start points:', error);
    }
  };

  const handleInputChange = (e) => {
    setTicketData({
      ...ticketData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://localhost:5001/api/Ticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(ticketData)
      });
      if (response.ok) {
        const newTicket = await response.json();
        alert('New ticket created:');
        // TODO: Do something with the new ticket, such as displaying a success message or redirecting to a new page.
      } else {
        console.error('Failed to create ticket:', response.status);
        // TODO: Handle the error, such as displaying an error message to the user.
      }
    } catch (error) {
      console.error('Error creating ticket:', error);
      // TODO: Handle the error, such as displaying an error message to the user.
    }
  };
  

  return (
    <div>
    <Header/>
    <form onSubmit={handleSubmit}>
      <label>
        Ticket Number:
        <input type="text" name="TicketNumber" value={ticketData.TicketNumber} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Price:
        <input type="number" name="Price" value={ticketData.Price} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Start Point:
        <select name="StartPointId" value={ticketData.StartPointId} onChange={handleInputChange}>
          <option value="">Select Start Point</option>
          {startPoints.map((startPoint) => (
            <option key={startPoint.StartPointId} value={startPoint.StartPointId}>
              {startPoint.DeparatureCityName}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        City:
        <select name="CityId" value={ticketData.CityId} onChange={handleInputChange}>
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city.CityId} value={city.CityId}>
              {city.CityName}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Time:
        <input type="text" name="Time" value={ticketData.Time} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Date:
        <input type="text" name="Date" value={ticketData.Date} onChange={handleInputChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default PostTicket;


