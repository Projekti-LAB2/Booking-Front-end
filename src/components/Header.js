import React from "react";
import classes from './Header.module.css';
import HeaderButton from "./HeaderButton";
import photologo from '../assets/logobuses.png'
//import Langselect from "./langselect/Langselect";
import LanguageSelect from "./langselect/Langselect";
import { useTranslation } from 'react-i18next';

const Header = (props) =>{

    
        const { t } = useTranslation();
 
    return(
        <div className={classes.header}>
            <img className={classes.photologo} src={photologo}/>
            <HeaderButton/>
            
        </div>
        
        );

}
export default Header;