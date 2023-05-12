
import React, { useState } from "react"
import Select from 'react-select'
import classes from './Langselect.module.css';

const options = [

    { value: 'al', label: 'Albania' },
    { value: 'en', label: 'English' },
    { value: 'de', label: 'Deutsch' },
  ];

const Langselect = (props) =>{

     const [value, setValue] = useState('')
  
    const changeHandler = (value) => {
       setValue(value)
    }


    return (
<div className={classes.select} >
<label htmlFor="languageSelect">Select language:</label>
 <Select id="languageSelect"  options={options} value={value} onChange={changeHandler}  />
 </div>
    );
};

export default Langselect;