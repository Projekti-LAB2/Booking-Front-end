import React from "react";
import classes from './form.module.css'
const Form = (props) => {

  return (
    <div className={classes.formdiv}>
      <form className={classes.form}>
      <div className={classes.checkboxDiv}>
          <input className={classes.checkboxInput} type="radio" name="roundTip"/>
          <label className={classes.checkboxLabel}>Round Trip</label>

          <input className={classes.checkboxInput} type="radio" name="oneWay"/>
          <label className={classes.checkboxLabel}>One way</label>

          <input className={classes.checkboxInput} type="radio" name="multiCity"/>
          <label className={classes.checkboxLabel}>Multi City</label>
        </div>
        <div className={classes.inputDiv}>
          <label className={classes.formLabel}>From</label>
          <select className={classes.input} name="from">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className={classes.inputDiv}>
          <label className={classes.formLabel}>To</label>
          <select className={classes.input} name="to">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className={classes.inputDateDiv}>
          <label className={classes.formLabel}>Departing</label>
          <input className={classes.inputdate} type="date" name="departing" />
        </div>
        <div className={classes.inputDateDiv}>
          <label className={classes.formLabel}>Returning</label>
          <input className={classes.inputdate} type="date" name="returning" />
        </div>
        <div className={classes.buttonDiv}>
          <button className={classes.button}>Search For Tickets</button>
        </div>
      </form>
    </div>
  );

};
export default Form