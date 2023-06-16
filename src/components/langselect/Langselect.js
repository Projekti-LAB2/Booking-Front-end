
import React, { useState } from "react"
import Select from 'react-select'
import classes from './Langselect.module.css';
import {useTranslation } from "react-i18next";

const Langselect = (props) =>{


const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className={classes.langdiv}>
      <select className={classes.select} onChange={changeLanguage}>
        <option value="al">Albania</option>
        <option value="en">English</option>
        <option value="de">Deutsch</option>
      </select>
    </div>
  );
    
};

export default Langselect;