import React from "react";
import classes from './form.module.css'
import { useTranslation } from 'react-i18next';
const Form = (props) => {
  const { t } = useTranslation();

  return (
    <div className={classes.formdiv}>
      <form className={classes.form}>
      <div className={classes.checkboxDiv}>
          <input className={classes.checkboxInput} type="radio" name="roundTip"/>
          <label className={classes.checkboxLabel}>{t('RoundTrip')}</label>

          <input className={classes.checkboxInput} type="radio" name="oneWay"/>
          <label className={classes.checkboxLabel}>{t('Oneway')}</label>

          <input className={classes.checkboxInput} type="radio" name="multiCity"/>
          <label className={classes.checkboxLabel}>{t('Multicity')}</label>
        </div>
        <div className={classes.inputDiv}>
          <label className={classes.formLabel}>{t('From')}</label>
          <select className={classes.input} name="from">
            <option value="option1">{t('Option1')}</option>
            <option value="option2">{t('Option2')}</option>
            <option value="option3">{t('Option3')}</option>
          </select>
        </div>
        <div className={classes.inputDiv}>
          <label className={classes.formLabel}>{t('To')}</label>
          <select className={classes.input} name="to">
            <option value="option1">{t('Option1')}</option>
            <option value="option2">{t('Option2')}</option>
            <option value="option3">{t('Option3')}</option>
          </select>
        </div>
        <div className={classes.inputDateDiv}>
          <label className={classes.formLabel}>{t('Departing')}</label>
          <input className={classes.inputdate} type="date" name="departing" />
        </div>
        <div className={classes.inputDateDiv}>
          <label className={classes.formLabel}>{t('Returning')}</label>
          <input className={classes.inputdate} type="date" name="returning" />
        </div>
        <div className={classes.buttonDiv}>
          <button className={classes.button}>{t('Search')}</button>
        </div>
      </form>
    </div>
  );

};
export default Form