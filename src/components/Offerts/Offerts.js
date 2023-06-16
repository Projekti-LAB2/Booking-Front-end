import React from "react"
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Header from "../Header";
import { useEffect, useState } from "react";
import axios from "axios";
const Offers = (props) => {

    const [offers, setOffers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = (await axios.get("https://localhost:5001/api/Offer")).data;
            setOffers(data);
        }
        fetchData();
    }, []);
    return (
        <div>
            <Header />
            {offers.map((offer) => (
                <div key={offer.OfferId}>
                    <div>
                        <h1>Image</h1>
                    </div>
                    <div>
                        <h1>{offer.OfferName}</h1>
                        <h1>{offer.description}</h1>
                    </div>
                    <div>
                        <h1>{offer.price}</h1>
                    </div>
                    <div>
                        <h1>rezervo</h1>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Offers