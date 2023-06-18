import React from "react";
import './HeaderButton.css';
import Langselect from "./langselect/Langselect";

import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

const HeaderButton = () => {
  return (
    <div className='listHeader'>
      <ul className="ulHeader">
        {/* <li><a href="#">Home</a></li> */}
        <li className="liHeader"><Link to="/">Home</Link></li>
        {/* <li><a href="#">Offers</a></li> */}
<li className="liHeader"><Link to="/offers">Offers</Link></li>
        <li className="liHeader"><a href="ticket">Tickets</a></li>
        <li className="liHeader"><a href="/contactus">Contact Us</a></li>
        <Langselect/>
      </ul>
      <div>
        <button className="buttonHeader">Login</button>
        <button className="buttonHeader">Sign up</button>
      </div>
    </div>
  );
};

export default HeaderButton;