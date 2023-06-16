import React from "react";
import classes from './HeaderButton.module.css';
import Langselect from "./langselect/Langselect";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

const HeaderButton = () => {
  return (
    <div className={classes.list}>
      <ul>
        {/* <li><a href="#">Home</a></li> */}
        <li><Link to="/">Home</Link></li>
        {/* <li><a href="#">Offers</a></li> */}
<li><Link to="/offers">Offers</Link></li>
        <li><a href="#">Tickets</a></li>
        <Langselect/>
      </ul>
      <div>
        <button>Login</button>
        <button>Sign up</button>
      </div>
    </div>
  );
};

export default HeaderButton;