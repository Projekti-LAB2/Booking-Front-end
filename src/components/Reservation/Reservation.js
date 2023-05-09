import React from "react";
import classes from './Reservation.module.css'
import photo from '../../assets/buses.jpg';
import Form from "./form";

const Reservation =(props) =>{

    return(
         <div className={classes.reservationdiv}>
           {/* <img src={photo} className={classes.photo} /> */}
             <Form/>
        </div>
    
    );
        
};
export default Reservation