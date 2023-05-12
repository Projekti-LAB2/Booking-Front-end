import React from "react";
import classes from './Header.module.css';
import HeaderButton from "./HeaderButton";
import photologo from '../assets/logobuses.png'
//import Langselect from "./langselect/Langselect";
import LanguageSelect from "./langselect/Langselect";
const Header = (props) =>{

 
    return(
        <div className={classes.header}>
            <img className={classes.photologo} src={photologo}/>
            <LanguageSelect/>
            
        </div>
        
        );

}
export default Header;