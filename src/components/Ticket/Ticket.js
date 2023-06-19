import { useEffect, useState } from 'react';
import React, { useRef } from 'react';
import Header from '../Header';
import './Ticket.css';
import axios from "axios";
import Modal from 'react-modal';
import emailjs from '@emailjs/browser';



function Ticket() {
    const [tickets, setTickets] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalTicket, setModalTicket] = useState(null);
    const openModal = (ticket) => {
        // Set the offer as a property in the component state
        setModalTicket(ticket);


        // Open the modal
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    const handleFormSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the form data
        const formData = {
            Name: document.getElementById('firstName').value,
            LastName: document.getElementById('lastName').value,
            Email: document.getElementById('email').value,
            IdentityNumber: document.getElementById('identityNumber').value,
            Phone: document.getElementById('phone').value,
            TicketId: modalTicket.ticketId
        };

        try {
            const response = await axios.post('https://localhost:5001/api/bookingticket', formData);

            // Handle the response
            console.log(response.data); // You can do something with the response data
            sendEmail(event);
        } catch (error) {
            // Handle the error
            console.error(error);
        }
    };




    useEffect(() => {
        fetch('https://localhost:5001/api/Ticket')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const flattenedTickets = flattenTickets(data);
                setTickets(flattenedTickets);
            })
            .catch(error => console.log(error));
    }, []);

    const flattenTickets = data => {
        const flattenedTickets = [];

        const traverse = ticket => {
            const flattenedTicket = {
                ticketId: ticket.TicketId,
                ticketNumber: ticket.TicketNumber,
                price: ticket.Price,
                startPointId: ticket.StartPointId,
                startPoint: ticket.StartPoint && ticket.StartPoint.DeparatureCityName ? ticket.StartPoint.DeparatureCityName : '',
                cityId: ticket.CityId,
                city: ticket.City.CityName,
                time: ticket.Time,
                date: ticket.Date
            };

            flattenedTickets.push(flattenedTicket);

            if (ticket.StartPoint && ticket.StartPoint.Tickets) {
                ticket.StartPoint.Tickets.forEach(subTicket => traverse(subTicket));
            }
        };

        data.forEach(ticket => traverse(ticket));

        return flattenedTickets;
    };
    // Sorts the tickets by price from highest to lowest
    const sortByPriceDescending = () => {
        const sortedTickets = [...tickets];
        sortedTickets.sort((a, b) => b.price - a.price);
        setTickets(sortedTickets);
    };

    // Sorts the tickets by price from lowest to highest
    const sortByPriceAscending = () => {
        const sortedTickets = [...tickets];
        sortedTickets.sort((a, b) => a.price - b.price);
        setTickets(sortedTickets);
    };

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hstoink', 'template_57xybph', form.current, 'JvQKht5KA-jBnxr1y')
            .then((result) => {
                console.log(result.text);
                alert("Rezervimi i tiketes u krye me sukses !Shikoni email per me shume info.")
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <Header />
            <div className='navbar'>
                <div className='search-bar'>
                    <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search by City you want to go" />
                </div>
                <div>
                <button className='sort-buttons' onClick={sortByPriceDescending}>Expensive Tickets</button>
                <button onClick={sortByPriceAscending} className='sort-buttons'>Cheap Tickets</button>
                </div>

            </div>
            <div className="container mt-5 d-flex justify-content-center flex-column ">
                {tickets.filter((ticket) => ticket.city.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map(ticket => (
                        <div className='ticket' key={ticket.TicketId}>
                            <div className='ticketForm'>

                                <h2 className='fontih'>Udheto nga {ticket.startPoint}<large>&rarr;</large>{ticket.city}</h2>
                                <p className='fontip1 font-italic'>Perfito nga zbritja e madhe dhe paguaj vetem {ticket.price} Euro</p>
                                <p className='fonti font-italic'>Udhetimi do te filloj me date {ticket.date} ne ora {ticket.time}</p>

                                <button href='#' className='ticketButton btn btn-primary' onClick={() => openModal(ticket)}>Book Now</button>





                            </div>


                        </div>
                    ))}
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Modal"
                >
                    <div className='modal-contenti'>
                    <div className="modal-title-divi">
                        <h2 className="modal-titlee">Udheto ne : {modalTicket ? modalTicket.city : ''}</h2>
                    </div>
                    <form className="modal-forma" ref={form} onSubmit={sendEmail} >
                        <div className="form-groupi">
                            <label htmlFor="firstName">Emri:</label>
                            <input type="text" id="firstName" name="firstName" className="form-control" />
                        </div>
                        <div className="form-groupi">
                            <label htmlFor="lastName">Mbiemri:</label>
                            <input type="text" id="lastName" name="lastName" className="form-control" />
                        </div>
                        <div className="form-groupi">
                            <label htmlFor="email">Email-i:</label>
                            <input type="email" id="email" name="email" className="form-control" />
                        </div>
                        <div className="form-groupi">
                            <label htmlFor="identityNumber">Numri Personal:</label>
                            <input type="text" id="identityNumber" name="identityNumber" className="form-control" />
                        </div>
                        <div className="form-groupi">
                            <label htmlFor="phone">Nr. Tel:</label>
                            <input type="text" id="phone" name="phone" className="form-control" />
                        </div>
                        <div className="form-groupi">
                            <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Rezervo</button>
                        </div>
                    </form>
                    </div>
                </Modal>

            </div>

        </div>


    );
}

export default Ticket;
{/* <form ref={form} onSubmit={sendEmail} >
           

                {tickets.map(ticket => (
                    <div className="row g-3 ">
                        <div className="ticket d-flex flex-row">
                            <div className="d-flex flex-row card border-lightblue text-center">
                                <div className="card-body">
                                    <h5 className="card-title ticket-info">
                                        {ticket.startPoint}<large>&rarr;</large>{ticket.city}
                                    </h5>
                                    <h5 className="card-title ticket-info">
                                        <h2>{ticket.time}<large>&rarr;</large>04:00</h2>
                                    </h5>
                                    <span><h3>Nisja behet me date: {ticket.date}</h3></span>
                                    <p className="card-text">
                                        <span className="text-primary ticket-info ticket-price">
                                            <em>Just {ticket.price} Euro</em>
                                        </span>
                                    </p>
                                   
                                    <p class="card-text">
                                     
                                        <button type="submit" >Bye now</button>
                                       
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
               </form>
             
            </div>
            
        </div> */}
