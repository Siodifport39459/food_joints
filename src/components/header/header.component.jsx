import React from 'react';
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg' //getting logo file
import {Link} from 'react-router-dom'



//functional component (as there is no data/state that is to be changed)

const Header = () => (
    <div className = "header" >
        <Link to="/"><Logo className="logo-container"></Logo></Link>
        <div className="options">
            <Link className="option" to="/signin">signin </Link> &nbsp;
         
             
        </div>
    </div>
    
)

export default Header;

