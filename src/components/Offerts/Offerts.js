import React from "react"
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Header from "../Header";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from 'react-modal';
import './Offerts.css';
const Offers = (props) => {

    const [offers, setOffers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = (await axios.get("https://localhost:5001/api/Offer")).data;
            setOffers(data);
        }
        fetchData();
    }, []);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalOffer, setModalOffer] = useState(null);
    const openModal = (offer) => {
        // Set the offer as a property in the component state
        setModalOffer(offer);
      
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
            OfferId: modalOffer.OfferId
        };
      
        try {
          const response = await axios.post('https://localhost:5001/api/bookingoffer', formData);
      
          // Handle the response
          console.log(response.data); // You can do something with the response data
        } catch (error) {
          // Handle the error
          console.error(error);
        }
      };
    return (
        <div>
            <Header />
            {offers.map((offer) => (
                <div key={offer.OfferId}>
                    <div className="container mt-5 mb-5">
                        <div className="d-flex justify-content-center row">
                            <div className="col-md-10">
                                <div className="row p-2 bg-white border rounded">
                                    <div className="col-md-3 mt-1">
                                        <img
                                            className="img-fluid img-responsive rounded product-image"
                                            src={offer.Image}
                                            alt="Offer Image"
                                        />
                                    </div>
                                    <div className="col-md-6 mt-1">
                                        <h5>{offer.OfferName}</h5>
                                        <div className="d-flex flex-row">
                                            <div className="ratings mr-2">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <p className="text-justify text-truncate para mb-0">{offer.OfferDescription}</p>
                                    </div>
                                    <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                        <div className="d-flex flex-row align-items-center">
                                            <h5>Price: </h5> <h5 className="mr-4">&nbsp;{offer.Price}€</h5>
                                        </div>
                                        <div className="d-flex flex-column mt-4">
                                            <button className="btn btn-outline-primary btn-sm mt-2" type="button"
                                                onClick={() => openModal(offer)}>Rezervo oferten</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Modal"
            >
                <div className="modal-title-div">
                    <h2 className="modal-title">Oferta: {modalOffer.OfferName}</h2>
                </div>
                <form className="modal-form">
                    <div className="form-group">
                        <label htmlFor="firstName">Emri:</label>
                        <input type="text" id="firstName" name="firstName" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Mbiemri:</label>
                        <input type="text" id="lastName" name="lastName" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email-i:</label>
                        <input type="email" id="email" name="email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="identityNumber">Numri Personal:</label>
                        <input type="text" id="identityNumber" name="identityNumber" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Nr. Tel:</label>
                        <input type="text" id="phone" name="phone" className="form-control" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Rezervo</button>
                    </div>
                </form>
            </Modal>
        </div>
    );

}

export default Offers
