import React, { useState } from 'react';
import './PostContact.css';
import Header from '../Header';
const PostContact = () => {

  const [contactformData, setContactFormData] = useState({
    Name: '',
    Message: '',
    Email: ''

  });





  const handleInputChange = (e) => {
    setContactFormData({
      ...contactformData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://localhost:5001/api/ContactForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactformData)
      });
      if (response.ok) {
        const newContactForm = await response.json();
        alert('You have submited your info, One of our Agent will contact you soon!!:');
        // TODO: Do something with the new , such as displaying a success message or redirecting to a new page.
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
    <div className='title'>
      <h2>Contact Us </h2>
    </div>
    <form onSubmit={handleSubmit} className='contactForm'>
      <div className='Border'>
 
      <label className='labelContact'>
      
        Name:
        <input type="text" id="teksti" name="Name" value={contactformData.Name} onChange={handleInputChange} />
      </label>
      <br />
      <label className='labelContact'>
        Email:
        <input type="text" id="teksti" name="Email" value={contactformData.Email} onChange={handleInputChange} />
      </label>


      <br />
      <label className='labelContact'>
        Message:
        <input type="text"  id="message" name="Message" value={contactformData.Time} onChange={handleInputChange} />
      </label>
 
      <br />
      <button className='buttonContact' type="submit">Submit</button>
      </div>
    </form>
    </div>
  );
};

export default PostContact;