import React from "react";
import classes from './form.module.css'
const Form = (props) =>{

    return (
      <div className={classes.formdiv}>
        <form className={classes.form}>
          <label>Name:</label>
          <input className={classes.input} type="text" name="name" />
          <label>Name:</label>
          <br></br>
          <input className={classes.input} type="text" name="name" />
          <label>Name:</label>
           <input className={classes.inputdate} type="date" name="name" />
          <label>Name:</label>
          <br></br>
          <input className={classes.inputdate} type="date" name="name" />
        </form>
      </div>
    );

};
export default Form