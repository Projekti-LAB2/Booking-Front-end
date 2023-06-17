import { useEffect, useState } from 'react';
import React, { useRef } from 'react';
import egpng from '../../assets/1200px-Flag_of_Egypt_(variant).png';
import Header from '../Header';
import './Ticket.css'
import emailjs from '@emailjs/browser';
function Ticket() {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        fetch('https://localhost:5001/api/Ticket')
            .then(response => response.json())
            .then(data => {
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
                startPoint: ticket.StartPoint.DeparatureCityName,
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
    const form=useRef();
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
            <form ref={form} onSubmit={sendEmail}>
            <div class="container  mt-5">

                {tickets.map(ticket => (
                    <div class="row g-3">


                  
                        <div class="ticket d-flex flex-row">
                            <div class="d-flex flex-row card border-lightblue text-center">
                                <div class="card-body ">
                                    <h5 class="card-title ticket-info">
                                        {/* <i class="bi bi-arrow-right-circle-fill text-primary"></i> */}
                                        {ticket.startPoint}<large>&rarr;</large>{ticket.city}
                                    </h5>
                                    <h5 class="card-title ticket-info">
                                        {/* <i class="bi bi-arrow-right-circle-fill text-primary"></i> */}
                                       <h2> {ticket.time}<large>&rarr;</large>04:00</h2>
                                    </h5>
                                    <span><h3>Nisja behet me date :{ticket.date}</h3></span>
                                    <p class="card-text">
                                          <span class="text-primary ticket-info ticket-price"><em>Just {ticket.price} Euro</em></span>
                                    </p>
                                   
                                    <p class="card-text">
                                     
                                        <button type="submit" >Bye now</button>
                                       
                                        
                                    </p>
                                </div>
                            </div>
                        </div>


                      </div>
                   
                ))}
               
            </div>
            </form>
        </div>
       
    );
}

export default Ticket;
