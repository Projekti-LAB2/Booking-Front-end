import React from "react";
import classes from './form.css'
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import axios from 'axios';

const Form = (props) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    roundTrip: false,
    oneWay: false,
    multiCity: false,
    from: '',
    to: '',
    departing: '',
    returning: ''
  });

  // const handleInputChange = (event) => {
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  // };

  const handleSearch = (event) => {
    event.preventDefault();
    // Perform API call using Axios
    axios.get('https://localhost:5001/api/Ticket')
      .then(response => {

        const formData = {
          from: document.getElementById('from').value,
          to: document.getElementById('to').value,
          departing: document.getElementById('departing').value,
          returning: document.getElementById('returning').value,
      };
        // Filter the response based on the inputs
        // You can access the filtered data using response.data
        if(response.data){
          const filteredTickets = response.data.filter(data => data.City.CityName === formData.from);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
    <div className='formdivi'>
      <form className='form2'>
      <div className='checkboxDivi'>
          <input className='checkboxInputi' id='formdivi' type="radio" name="roundTip"/>
          <label className='checkboxLabeli'>{t('RoundTrip')}</label>

          <input className='checkboxInputi' type="radio" name="oneWay"/>
          <label className='checkboxLabeli'>{t('Oneway')}</label>

          <input className='checkboxInputi' type="radio" name="multiCity"/>
          <label className='checkboxLabeli'>{t('Multicity')}</label>
        </div>
        <div className='inputDivi'>
          <label className='formLabeli'>{t('From')}</label>
          <select className='inputi' name="from" id="from">
            <option value="Prishtine">{t('Prishtine')}</option>
            <option value="Podujeve">{t('Podujeve')}</option>
            <option value="Durres">{t('Durres')}</option>
          </select>
        </div>
        <div className='inputDivi'>
          <label className='formLabeli'>{t('To')}</label>
          <select className='inputi' name="to" id="to">
            <option value="Prishtine">{t('Prishtine')}</option>
            <option value="Podujeve">{t('Podujeve')}</option>
            <option value="Durres">{t('Durres')}</option>
          </select>
        </div>
        <div className='inputDateDivi'>
          <label className='formLabeli'>{t('Departing')}</label>
          <input className='inputdatee' type="date" name="departing" id="departing"/>
        </div>
        <div className='inputDateDivi'>
          <label className='formLabeli'>{t('Returning')}</label>
          <input className='inputdatee' type="date" name="returning" id="returning"/>
        </div>
        <div className={classes.buttonDiv}>
          <button className='buttoni' onClick={handleSearch}>{t('Search')}</button>
        </div>
      </form>
    </div>
  );

};
export default Form