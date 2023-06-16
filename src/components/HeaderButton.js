import React from "react";
import classes from './HeaderButton.module.css';
import Langselect from "./langselect/Langselect";

const HeaderButton = () => {
  return (
    <div className={classes.list}>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Offers</a></li>
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