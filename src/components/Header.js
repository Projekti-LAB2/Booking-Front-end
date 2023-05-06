import React from "react";
import classes from './Header.module.css';
import HeaderButton from "./HeaderButton";
import photologo from '../assets/logobuses.png'
const Header = (props) =>{

 
    return(
        <div className={classes.header}>
            <img className={classes.photologo} src={photologo}/>
            <HeaderButton/>
            
        </div>
        
        );

}
export default Header;