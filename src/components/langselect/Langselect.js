
import React, { useState } from "react"
import Select from 'react-select'
import classes from './Langselect.module.css';
import {useTranslation } from "react-i18next";

const Langselect = (props) =>{

//      const [value, setValue] = useState('')
  
//     const changeHandler = (value) => {
//        setValue(value)
//     }


//     return (
// <div className={classes.select} >
// <label htmlFor="languageSelect">Select language:</label>
//  <Select id="languageSelect"  options={options} value={value} onChange={changeHandler}  />
//  </div>
const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className={classes.langdiv}>
    <label>Select language:</label>
    <select className={classes.select} onChange={changeLanguage}>
      <option value="al">ALBANIA</option>
      <option value="en">English</option>
      <option value="de">Deutsch</option>
    </select>
    </div>
  );
    
};

export default Langselect;